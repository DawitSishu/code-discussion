import { Button,Box, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';



function SignIn({handleSignIn,loadig}) {
  return (
    <Box
    sx={{
        borderRadius:5,
        boxShadow: "10px 10px 10px 10px grey",
        margin: 10,
        padding: 10,
        backgroundColor:"white",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}  
    >

        <Typography variant='h2'>Code-Discussion APP</Typography>
        <br/><br/>
        <Button onClick={handleSignIn} disabled={loadig} variant="contained" sx={{width:"50vw" ,textTransform:" lowercase !important"}} >
            <GoogleIcon sx={{ mr: 2}} />{'  Sign-in With Google'}  
         </Button>
    </Box>
            


   
  )
}

export default SignIn