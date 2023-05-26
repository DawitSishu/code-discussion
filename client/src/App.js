import './App.css';
import { io  } from "socket.io-client";
import {useEffect, useState} from 'react'
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth'
import Room from './Components/Room/Room';
import RoomSelector from './Components/utils/RoomSelector';
import SignIn from './Components/utils/SignIn';



let availableRooms = [
  "js",
  "php",
  "python",
  "c++"
]
const socket = io.connect("https://code-discuss-server.onrender.com");
socket.on("connect", () => {
  console.log(socket); 
})
function App() {
  const [userRoom, setUserRoom] = useState('')
  const [user,setUser] = useState(null)
  const [inRoom,setInRoom] = useState(false)
  const [loadig,setLoading] = useState(false)
  const [chatMessage,setChatMessage] =useState([])
  const [rooomData,setRoomData] = useState([]);
 
  
  
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

  socket.on("roomData",data=>{
    console.log(data,'data');
    setRoomData([...data])
  })

  const handleSignout = () =>{
    setChatMessage([])
    setLoading(false)
    setUserRoom('')
    setInRoom(false)
    setRoomData([])
    setUser(null)
    socket.emit("leaveRoom",{room:userRoom,uid:user.uid,})
  }

  socket.on("error",msg => alert(msg))

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
    setChatMessage([...msgs])
  })

  const handleRoomLeft = () =>{
    setUserRoom('')
    setRoomData([])
    setInRoom(false)
    setChatMessage([])
    socket.emit("leaveRoom",{room:userRoom,uid:user.uid})
  }
  const handleRoom = (roomVal) =>{
    setInRoom(true)
    setUserRoom(roomVal)
    socket.emit("joinRoom",{room: roomVal, username:user.displayName,uid:user.uid})
  }
  return (
    <>
      {
        !user  ? <SignIn handleSignIn={handleSignIn} loadig={loadig}/>
      
      : !inRoom ? <RoomSelector  handleRoom={handleRoom} rooms={availableRooms}/>
      :<>
          {/* <Button onClick={handleSignout}  variant="contained" color='error'>sign out</Button> */}
    <Room  
        onSubmit={handleMsg} 
        messages={chatMessage}  
        senderId={user.uid} 
        username={user.displayName} 
        roomUsers={rooomData}
        handleSignout={handleSignout}
        onRoomLeft={handleRoomLeft}/>
        </>
      }
    </>
  );
}

export default App;
