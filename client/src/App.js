import './App.css';
import { io, Socket } from "socket.io-client";
import {useEffect, useState} from 'react'
import Room from './Components/Room/Room';

let id = ''
const socket = io("http://localhost:5000");
socket.on("connect", () => {
  
    console.log(socket); 
    id=socket.id
    console.log(id);
  })
function App() {
  const [msg,setMsg] =useState([])
  
  const handleMsg = (data) => {
      // console.log(data);
      // setMsg([...msg,data])
      socket.emit("newMsg",{message:data.message,id})
  }

  useEffect(()=>{
    socket.on("newMsg",(data)=>{
      // console.log(data)
      let newMsg = [...msg]
      newMsg.push(data)
      setMsg([...msg,data])
      console.log(newMsg);
      // console.log(msg);
      
    })
  },[socket])

  return (
    <div className="App">
      {console.log(msg)}
    {msg.length >0 ? msg.map((msgs,idx) => { return(<h5 key={idx}>{msgs.message} is from {msgs.id}</h5>)})
                   : null }
    <Room  onSubmit={handleMsg}/>
    </div>
  );
}

export default App;
