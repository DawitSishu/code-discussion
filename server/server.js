const connectToDb = require('./config/ConnectDB');

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
    socket.on("newMsg", (msg) => {
      console.log(msg)
      io.to('ten').emit("newMsg",msg)
    })
    socket.on("joinRoom",room=>{
      socket.join(room)
    })
});

server.listen(PORT,()=> {
    console.log(`server Started on Port ${PORT}...`)
})