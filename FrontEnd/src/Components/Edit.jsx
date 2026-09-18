import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 20,
  p:2,
};


export default function Edit() {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
     <Button onClick={handleOpen} sx={{color:'crimson',}}>Edit CV</Button>
       <Box>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
                  <Paper sx={{
               width:500,
               height:'auto',
              }}>
          <Stack direction='column' 
          sx={{
            gap:1,
            padding:5,
          }}>
          <Typography variant='h5' sx={{fontWeight:700,fontFamily:'-moz-initial'}}></Typography>
          <Stack direction='row' sx={{justifyContent:'start',alignItems:'center',}}>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Name:<TextField sx={{'& .MuiOutlinedInput-root':{'& fieldset':{border:'none',}}}}></TextField></Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Email:</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Phone Number:</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>LinkedIn:</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Github:</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Location:</Typography>
          </Stack>
           <Divider>
          <Typography variant='h5' 
                      sx={{
                        fontFamily:'-moz-initial',
                        fontWeight:500
          }}>
            Professional Summary
          </Typography>
        </Divider>
         <Typography>
           
         </Typography>
           <Divider>
          <Typography variant='h5' 
                      sx={{
                        fontFamily:'-moz-initial',
                        fontWeight:500
          }}>
           Technical Skills
          </Typography>
        </Divider>
        <Typography>
         
          
          </Typography>
           <Divider>
          <Typography variant='h5' 
                      sx={{
                        fontFamily:'-moz-initial',
                        fontWeight:500
          }}>
           Education
          </Typography>
        </Divider>
        <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Degree:</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Collage:</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Year of Graduation:</Typography>
          </Stack>
        
          
        </Stack>

        <Button sx={{fontFamily:'-moz-initial', fontStyle:'inherit', backgroundColor:'brown' , color:'black' ,fontWeight:'700' ,m:3}}>edit cv</Button>
       
        </Paper> 

        </Box>
      </Modal>


      </Box>
    </div>
  )
}
