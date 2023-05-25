import './App.css';
import { io  } from "socket.io-client";
import {useEffect, useState} from 'react'
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import Room from './Components/Room/Room';
import RoomSelector from './Components/RoomSelector';
import { Button } from '@mui/material';




let id = ''
const socket = io.connect("http://localhost:5000");
socket.on("connect", () => {
    console.log(socket); 
    id=socket.id
    console.log(id);
  })
function App() {
  const [user,setUser] = useState(null)
  const [inRoom,setInRoom] = useState(false)
  const [loadig,setLoading] = useState(false)
  const [msgr,setMsg] =useState([])
  
  
  const handleSignIn = async() =>{
    setLoading(true)
    const response =  await signInWithPopup(auth,provider);
    setUser(response.user)
  }

  const handleSignout = () =>{
    setLoading(false)
    setUser(null)
  }



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

    //firebase auth and use state to conditionally render it  --done
    //even disable send button if the user is not in a room   --done
    // show ppl who r in the room
    //leave a room btn(conditionally render it)
    //show online ppl using id(in room firebase)
    <div className="App">
      {
        !user  ? <Button onClick={handleSignIn} disabled={loadig} variant="contained" >sign in</Button>
      
      : <>
          {!inRoom && <RoomSelector  handleRoom={handleRoom}/>}
          <Button onClick={handleSignout}  variant="contained" color='error'>sign out</Button>
    <Room  onSubmit={handleMsg} messages={msgr} senderId={id} canSend = {inRoom}/>
        </>
      }
      {/* {console.log(msgr)}
    {msgr.map((msgs,idx) => { return(<h5 key={idx}>{msgs.message} is from {msgs.id}</h5>)})
                   } */}
                  {/* {!inRoom && <RoomSelector  handleRoom={handleRoom}/>}*/}
    <Room  onSubmit={handleMsg} messages={msgr} senderId={id} canSend = {!inRoom}/> 
    </div>
  );
}

export default App;
