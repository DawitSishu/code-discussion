import { Box,Button, IconButton, Typography } from "@mui/material"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

function RoomInfo() {
  const users =[
    "User",
    "User",
    "User",
    "User",
    "User",
    "User",
    "User",
    "User",
    "User",
    "User",
  ]
  const handleSignout = () =>{
    alert('signed out')
  }
  return (
    <Box 
    sx={{
      // backgroundColor:"gray",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // minHeight: '100vh', 
   
  }}
    >
      <Typography variant="h4">Room Name</Typography>
      <Typography variant="body1">People Inside This room</Typography>
      <Box sx={{
         display:"flex",
         flexDirection:"column",
      }}>
          {
            users.map((usr,idx) => 
            <IconButton key={idx}  fontSize="small" sx={{p:0,m:0,color:"#2196f3 !important"}}  disabled={true}>{usr}<PersonIcon /></IconButton>
          )
          }
      </Box>
    
      <Box>
        <Button onClick={handleSignout}  variant="contained" color="error"sx={{marginRight:5,textTransform:" lowercase !important"}}>sign out</Button>
        <Button onClick={handleSignout}  variant="contained" sx={{textTransform:" lowercase !important",backgroundColor:"#795548"}}>Leave Room</Button>
      </Box>
    </Box> 
  )
}

export default RoomInfo