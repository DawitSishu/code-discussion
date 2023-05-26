import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import moment from "moment";



function Message({message,ID,username}) {
  let time = moment(message.createdAt);
    const boxStyle = {
            overflowWrap:"break-word",
            wordWrap:"break-word",
            backgroundColor:"red",
            hyphens:"auto",
            padding:1.5,
            marginBottom:2,
            p: 2,
            backgroundColor: ID == message.user_id ?"primary.light" :"secondary.light",
            borderRadius : ID == message.user_id ? "25px 25px 5px 25px" :"25px 25px 25px 5px" ,
    }
  return (
        <Paper
        variant="outlined"
        sx={boxStyle}
      >
        <Typography variant="caption" color={"Highlight"}>{ID == message.user_id ? 'Me' : username}</Typography>
        <Typography variant="body1" >{message.message}</Typography>
        <Typography variant="caption" color={"white"}>{time.calendar()}</Typography>
      </Paper>
  )
}

export default Message