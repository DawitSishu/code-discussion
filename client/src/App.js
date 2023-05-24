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


  //make a joined room Sate and send the jooined room data with it
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

    //firebase auth and use state to conditionally render it
    //even disable send button if theuser is ot in a room
    // show ppl whore in the room
    //leave a room btn(conditionally render it)
    //show online ppl using id(in room firebase)
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
