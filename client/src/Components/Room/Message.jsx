import { Box, Container, Grid, Paper, Typography } from "@mui/material"



function Message({message,isSender,ID}) {
    const boxStyle = {
            overflowWrap:"break-word",
            wordWrap:"break-word",
            backgroundColor:"red",
            hyphens:"auto",
            padding:1.5,
            marginBottom:2,
            p: 2,
            backgroundColor: ID == message.id ?"primary.light" :"secondary.light",
            borderRadius : ID == message.id ? "25px 25px 5px 25px" :"25px 25px 25px 5px" ,
    }
  return (
        // <Box sx={boxStyle}>
        //     {message}
        // </Box >
        <Paper
        variant="outlined"
        sx={boxStyle}
      >
        <Typography variant="body1">{message.message}</Typography>
      </Paper>
  )
}

export default Message