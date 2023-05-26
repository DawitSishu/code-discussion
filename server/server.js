const connectToDb = require('./config/ConnectDB');
const Messages = require('./models/MessageModel');
const Rooms = require('./models/RoomModel')
const app = require('express')();
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);


const io = require('socket.io')(server,{
    cors: {
      origin: "http://localhost:3000" 
    }
  })

  //room that contains userlist(username) and their room and also online status

connectToDb()
   io.on("connection", (socket) => {
       console.log("someone connected..")
       socket.on("newMsg", async (messageData) => {
       let mainMessage = await Messages.create({
          user_id:messageData.id,
          message:messageData.message,
          room:messageData.room
         })
         console.log(messageData);
         io.to(messageData.room).emit("newMsg",mainMessage)
       })
       socket.on("joinRoom",async room=>{
         socket.join(room.room)
         const RoomDataUser = await Rooms.find({ roomname : room.room,uid:room.uid});
         const RoomData = await Rooms.find({roomname:room.room})
         console.log(RoomData,RoomDataUser);
        if(RoomDataUser.length == 0){
          const userRoom = await Rooms.create({
            username: room.username,
            roomname : room.room,
            uid:room.uid
          })
          if(RoomData.length == 0){
            console.log('no room data');
            io.to(room.room).emit("roomData",[userRoom])
          }else{
            console.log(' room data');
            RoomData.push(userRoom)
            io.to(room.room).emit("roomData",RoomData)
          }
          
        }else{
          io.to(room.room).emit("roomData",RoomData)
        }
        const oldMsg = await Messages.find({room: room.room})
        socket.emit('oldMsg',oldMsg)
       })


       socket.on("leaveRoom", async room =>{
        const RoomDataUser = await Rooms.find({uid:room.uid,roomname:room.room});
        if(RoomDataUser.length != 0){
          const deleted =  await Rooms.findByIdAndDelete(RoomDataUser[0]._id);
          socket.leave(room.room)
          const RoomData = await Rooms.find({roomname:room.room})
          io.to(room.room).emit("roomData",RoomData);
        }else{
          socket.emit("error","user Not found")
        }
       });

       socket.on("disconnect",()=>{
        console.log('disconnected');
       })
   });

server.listen(PORT,()=> {
    console.log(`server Started on Port ${PORT}...`)
})