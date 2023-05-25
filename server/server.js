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
       // console.log("socket is: ", socket)
       socket.on("newMsg", async (messageData) => {
        //  console.log(messageData)
       let mainMessage = await Messages.create({
          user_id:messageData.id,
          message:messageData.message,
          room:messageData.room
         })
         console.log(messageData);
         io.to(messageData.room).emit("newMsg",mainMessage)
       })
       //when someone jons send all the previous
       //messages
       socket.on("joinRoom",async room=>{
         socket.join(room.room)
         const RoomDataUser = await Rooms.find({username: room.username,uid:room.uid})
        // console.l;
         const RoomData = await Rooms.find({ roomname : room.room})
         if(RoomDataUser.length == 0){
          const userRoom = await Rooms.create({
            username: room.username,
            roomname : room.room,
            uid:room.uid
          })
          
          socket.emit("rooomData",RoomData.push(userRoom))
        }else{
          socket.emit("rooomData",RoomData)
        }
        const oldMsg = await Messages.find({room: room.room})
        socket.emit('oldMsg',oldMsg)
        // socket.emit('newMsg',{        
        // })
       })

       socket.on("leaveRoom",async room=>{
       const toBeDeleted =  await Rooms.find({uid:room.uid});
       const deleted = await Rooms.findByIdAndDelete(toBeDeleted[0]._id)
       socket.leave(room.room)
       })

       socket.on("leaveRoom", async room =>{
        const RoomDataUser = await Rooms.find({username: room.username,uid:room.uid})
        if(RoomDataUser.length != 0){
          const deleted =  await Rooms.findByIdAndDelete(RoomDataUser[0]._id);
          socket.leave(room.room)
        }else{
          socket.emit("error","user Not found")
        }
       });

       socket.on("disconnect",()=>{
        console.log(socket);
       })
   });

server.listen(PORT,()=> {
    console.log(`server Started on Port ${PORT}...`)
})