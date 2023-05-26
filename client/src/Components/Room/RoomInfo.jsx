import { Box,Button, IconButton, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';

function RoomInfo({roomUsers,handleSignout,onRoomLeft,ID}) {
  console.log(roomUsers);
  return (
    <Box 
    sx={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
   
  }}
    >
      <Typography variant="h4">Room Name</Typography>
      <Typography variant="body1">People Inside This room</Typography>
      <Box sx={{
         display:"flex",
         flexDirection:"column",
      }}>
          {
            roomUsers.map((usr,idx) => 
            <IconButton key={idx}  fontSize="small" sx={{p:0,m:0,color:"grey !important"}}  disabled={true}><PersonIcon />
               {usr.uid == ID ? "ME" : usr.username}
            </IconButton>
          )
          }
      </Box>
    
      <Box>
        <Button onClick={handleSignout}  variant="contained" color="error"sx={{marginRight:5,textTransform:" lowercase !important"}}>sign out</Button>
        <Button onClick={onRoomLeft}  variant="contained" sx={{textTransform:" lowercase !important",backgroundColor:"#795548"}}>Leave Room</Button>
      </Box>
    </Box> 
  )
}

export default RoomInfo