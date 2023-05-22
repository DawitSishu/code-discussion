
const app = require('express')();
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
      origin: "http://localhost:3000" 
    }
  })

io.on("connection", (socket) => {
    console.log("someone connected..")
    // console.log("socket is: ", socket)
    socket.on("newMsg", (msg) => {
      console.log(msg)
      io.emit("newMsg",msg)
    })
});

server.listen(PORT,()=> {
    console.log(`server Started on Port ${PORT}...`)
})