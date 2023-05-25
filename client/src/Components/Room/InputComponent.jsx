import { useForm } from 'react-hook-form';
import {Box, Button, Grid, OutlinedInput, Typography} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';


function InputComponent({onSend,canSend}) {
    const {
        register,
        handleSubmit,
        reset,
         formState: { errors },
    } = useForm();
    
    const handleMessage = (data) =>{
        onSend(data)
        reset()
    }

    return(<Grid 
        container 
        component="form"
        onSubmit={handleSubmit(handleMessage)}>
        <Grid item xs={11}>
            <OutlinedInput
            fullWidth
                placeholder='write Message'
                size='small'
                id='message'
                name='message' 
                {...register("message", {required: "message can't be empty"})}/>
            </Grid>
        {errors.message && <Typography color="red">message can't be Empty</Typography>}
        <Grid item xs={12} sx={{paddingTop:2,paddingBottom:2}}>
        <Button type='submit' variant='contained' disabled={canSend}>
            <SendIcon sx={{paddingRight:2}} />
            send
        </Button>
        </Grid>
    </Grid>
    );
}

export default InputComponent