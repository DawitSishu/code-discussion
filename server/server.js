const connectToDb = require('./config/ConnectDB');
const Messages = require('./models/MessageModel')
const app = require('express')();
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
      origin: "http://localhost:3000" 
    }
  })

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
         socket.join(room)
        const oldMsg = await Messages.find({room})
        socket.emit('oldMsg',oldMsg)
        // socket.emit('newMsg',{

        // })
       })
   });

server.listen(PORT,()=> {
    console.log(`server Started on Port ${PORT}...`)
})