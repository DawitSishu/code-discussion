import './App.css';
import { io  } from "socket.io-client";
import {useEffect, useState} from 'react'
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import Room from './Components/Room/Room';
import RoomSelector from './Components/RoomSelector';
import { Button } from '@mui/base';




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
    setLoading(false)
    const response =  await signInWithPopup(auth,provider);
    setUser(response.user)
  }

  consthandleSignout = () =>{
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

    //firebase auth and use state to conditionally render it
    //even disable send button if theuser is ot in a room
    // show ppl whore in the room
    //leave a room btn(conditionally render it)
    //show online ppl using id(in room firebase)
    <div className="App">
      { console.log(user) }
      <Button onClick={handleSignIn} disabled={loadig}>sign in</Button>
      {/* {console.log(msgr)}
    {msgr.map((msgs,idx) => { return(<h5 key={idx}>{msgs.message} is from {msgs.id}</h5>)})
                   } */}
                  {/* {!inRoom && <RoomSelector  handleRoom={handleRoom}/>}
    <Room  onSubmit={handleMsg} messages={msgr} senderId={id}/> */}
    </div>
  );
}

export default App;
