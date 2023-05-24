import './App.css';
import { io  } from "socket.io-client";
import {useEffect, useState} from 'react'
import Room from './Components/Room/Room';
import RoomSelector from './Components/RoomSelector';

let id = ''
const socket = io.connect("http://localhost:5000");
socket.on("connect", () => {
  
    console.log(socket); 
    id=socket.id
    console.log(id);
  })
function App() {
  const [inRoom,setInRoom] = useState(false)
  const [msgr,setMsg] =useState([])
  
  const handleMsg = (data) => {
      socket.emit("newMsg",{message:data.message,id})
  }

  useEffect(()=>{
    socket.on("newMsg",(data)=>{
      setMsg([...msgr,data])
      
    })
  })

  const handleRoom = (roomVal) =>{
    setInRoom(true)
    console.log(roomVal);
    // setRoom(roomVal)
    socket.emit("joinRoom",roomVal)
  }
  return (
    <div className="App">
      {/* {console.log(msgr)}
    {msgr.map((msgs,idx) => { return(<h5 key={idx}>{msgs.message} is from {msgs.id}</h5>)})
                   } */}
                  {!inRoom && <RoomSelector  handleRoom={handleRoom}/>}
    <Room  onSubmit={handleMsg} messages={msgr} senderId={id}/>
    </div>
  );
}

export default App;
