import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button ,Typography} from '@mui/material';
import { useState } from 'react';

function RoomSelector({handleRoom,rooms}) {
const [room,setRoom] = useState('')

   
  return (
    <Box 
    sx={{
      borderRadius:5,
      boxShadow: "10px 10px 10px 10px grey",
      margin: 10,
      backgroundColor:"white",
      padding: 10,
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}
    >
      <Typography variant='h4'>Join Your Preferd Room</Typography>
      <br /><br />
      <FormControl >
        <InputLabel id="demo-simple-select-label">room</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={room}
          label="room"
          onChange={(e)=>setRoom(e.target.value)}
        >
          {
            rooms.map((roomItem,idx) =>{
              return <MenuItem value={roomItem} key={idx}>{roomItem}</MenuItem>
            })
          }
        </Select>
        <br />
        <Button 
            onClick={()=>handleRoom(room)} 
            variant="contained" 
            sx={{width:"50vw" ,textTransform:" lowercase !important"}}>
                Join
        </Button>
      </FormControl>
    </Box>
  )
}

export default RoomSelector