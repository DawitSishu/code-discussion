import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/base';
import { useState } from 'react';

function RoomSelector({handleRoom}) {
const [room,setRoom] = useState('')

   
  return (
    <Box 
    >
      <FormControl >
        <InputLabel id="demo-simple-select-label">room</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={room}
          label="room"
          onChange={(e)=>setRoom(e.target.value)}
        >
          <MenuItem value={'ten'}>Ten</MenuItem>
          <MenuItem value={'twenty'}>Twenty</MenuItem>
          <MenuItem value={'30'}>Thirty</MenuItem>
        </Select>
        <Button onClick={()=>handleRoom(room)}>Join</Button>
      </FormControl>
    </Box>
  )
}

export default RoomSelector