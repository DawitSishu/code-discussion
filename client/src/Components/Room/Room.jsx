import { Box, Container, Grid } from "@mui/material"
import { useRef,useEffect } from "react"
import InputComponent from "./InputComponent"
import Message from "./Message"
import ScrollableFeed from 'react-scrollable-feed'
import RoomInfo from "./RoomInfo"


function Room({onSubmit,messages,senderId,canSend,username,roomUsers,handleSignout,onRoomLeft}) {
   
const onSend = (data)=>{
    onSubmit(data)
}
  return (
    
    <Grid  m={5}
    > 
   <Grid 
    sx={{
        marginTop:5,
        padding:5,
        borderRadius:5,
      boxShadow: "10px 10px 10px 10px grey",
      backgroundColor:"white"
    }} 
   container 
   spacing={2}
  >
    <Grid item  xs={10} md={5} >
       <RoomInfo 
        roomUsers={roomUsers} 
        handleSignout={handleSignout}
        onRoomLeft={onRoomLeft}
        ID={senderId}
        />
    </Grid>
    <Grid item xs={10} md={7} 
        >
     
        <Grid   sx={{maxHeight: '60vh',overflowY: "hidden"}}>
        <ScrollableFeed forceScroll={true}>
       { messages.map((msg,idx)=><Message message={msg} key={idx}  ID={senderId} username={username}/>)}
        </ScrollableFeed >
        </Grid>
        <Grid>
            <InputComponent onSend={onSend} canSend={canSend} />
        </Grid>
    </Grid>
   </Grid>
    </Grid>
  )
}

export default Room