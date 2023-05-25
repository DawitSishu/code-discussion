import './App.css';
import { io  } from "socket.io-client";
import {useEffect, useState} from 'react'
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import Room from './Components/Room/Room';
import RoomSelector from './Components/utils/RoomSelector';
import { Button } from '@mui/material';
import SignIn from './Components/utils/SignIn';



let availableRooms = [
  "js",
  "php",
  "python",
  "c++"
]
let id =''
const socket = io.connect("http://localhost:5000");
socket.on("connect", () => {
  console.log(socket); 
  id=socket.id
  console.log(id);
})
function App() {
  const [userRoom, setUserRoom] = useState('')
  const [user,setUser] = useState(null)
  const [inRoom,setInRoom] = useState(false)
  const [loadig,setLoading] = useState(false)
  const [chatMessage,setChatMessage] =useState([])
  const [rooomData,setRoomData] = useState(null);
  
  
  const handleSignIn = async() =>{
    try{
      setLoading(true)
      const response =  await signInWithPopup(auth,provider);
      setUser(response.user)
    }catch(err){
      setLoading(false);
      alert(err.message)
    }
   
  }

  socket.on("rooomData",data=>{
    setRoomData(data)
  })

  const handleSignout = () =>{
    setLoading(false)
    setInRoom('')
    setInRoom(false)
    setUser(null)
  }



  const handleMsg = (data) => {
      socket.emit("newMsg",
            {message:data.message,
              id:user.uid,
              room:userRoom})
  }


  //make a joined room Sate and send the jooined room data with it 
  useEffect(()=>{
    socket.on("newMsg",(data)=>{
      setChatMessage([...chatMessage,data])
      
    })
  })

  socket.on("oldMsg",msgs=>{
    console.log(msgs);
    setChatMessage([...chatMessage,...msgs])
  })

  const handleRoomLeft = () =>{
    socket.emit("leaveRoom",{room:userRoom,uid:user.uid})
  }
  const handleRoom = (roomVal) =>{
    setInRoom(true)
    console.log(roomVal);
    setUserRoom(roomVal)
    // setRoom(roomVal)
    // socket.emit("joinRoom",{room: roomVal, username:user.displayName,uid:user.uid})
  }
  return (

    //firebase auth and use state to conditionally render it  --done
    //even disable send button if the user is not in a room   --done
    // show ppl who r in the room
    //leave a room btn(conditionally render it)  
    //show online ppl using id(in room firebase)
    <>
      {rooomData && console.log(rooomData)}
      {
        !user  ? <SignIn handleSignIn={handleSignIn} loadig={loadig}/>
      
      : !inRoom ? <RoomSelector  handleRoom={handleRoom} rooms={availableRooms}/>
      :<>
          <Button onClick={handleSignout}  variant="contained" color='error'>sign out</Button>
    <Room  onSubmit={handleMsg} messages={chatMessage}  senderId={user.uid} username={user.displayName}/>
        </>
      }
    </>
  );
}

export default App;
