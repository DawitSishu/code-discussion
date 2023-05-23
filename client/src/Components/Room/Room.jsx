import { Container, Grid } from "@mui/material"
import { useRef,useEffect } from "react"
import InputComponent from "./InputComponent"
import Message from "./Message"
import ScrollableFeed from 'react-scrollable-feed'

function Room({onSubmit,messages,senderId}) {
   
const onSend = (data)=>{
    onSubmit(data)
}
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    
      useEffect(() => {
        scrollToBottom()
      }, messages);
  

  return (
   <Grid 
    sx={{
        marginTop:5,
        padding:5
    }} 
   container 
   spacing={2}
  >
    <Grid item  xs={10} md={5} >
        <Container color="red" sx={{backgroundColor:"red",marginTop:10}}>x</Container>
    </Grid>
    <Grid item xs={10} md={7} sx={
    {
        borderRadius:5,
        boxShadow: "10px 10px 10px 10px grey",
        // marginTop: 10,
        // padding:5
        // Left: 10,
        
        
    }
        }>
     
        <Grid   sx={{maxHeight: '60vh',overflowY: "hidden"}}>
        <ScrollableFeed forceScroll={true}>
       {messages.map((msg,idx)=><Message message={msg} key={idx}  ID={senderId}/>)}
        </ScrollableFeed >
        </Grid>
        <Grid>
            <InputComponent onSend={onSend} />
        </Grid>
    </Grid>
   </Grid>
  )
}

export default Room