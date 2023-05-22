import './App.css';
import { io  } from "socket.io-client";
import {useEffect, useState} from 'react'
import Room from './Components/Room/Room';

let id = ''
const socket = io.connect("http://localhost:5000");
socket.on("connect", () => {
  
    console.log(socket); 
    id=socket.id
    console.log(id);
  })
function App() {
  const [msgr,setMsg] =useState([])
  
  const handleMsg = (data) => {
      socket.emit("newMsg",{message:data.message,id})
  }

  useEffect(()=>{
    socket.on("newMsg",(data)=>{
      setMsg([...msgr,data])
      
    })
  })

  return (
    <div className="App">
      {console.log(msgr)}
    {msgr.map((msgs,idx) => { return(<h5 key={idx}>{msgs.message} is from {msgs.id}</h5>)})
                   }
    <Room  onSubmit={handleMsg}/>
    </div>
  );
}

export default App;
