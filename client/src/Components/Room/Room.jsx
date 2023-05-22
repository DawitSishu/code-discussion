import { useForm } from 'react-hook-form';
import {Box, Button, OutlinedInput, Typography} from "@mui/material"



function Room({onSubmit}) {
    const {
        register,
        handleSubmit,
        reset,
         formState: { errors },
    } = useForm();
    
const onSend = (data)=>{
    reset()
    onSubmit(data)
}

  return (
    <Box 
        component="form"
        onSubmit={handleSubmit(onSend)}>
            <OutlinedInput
                placeholder='write Message'
                id='message'
                name='message' 
                {...register("message", {required: "message can't be empty"})}/>
        {errors.message && <Typography color="red">message can't be Empty</Typography>}
        <Button type='submit'>send</Button>
    </Box>
  )
}

export default Room