import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Download() {
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box>
        <Stack direction="row"
               sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  mt:15,
                  px:10,
                
               }}>
                <Typography variant='h4'
                            sx={{}}>
                  All Downloads
                </Typography>
                <Button onClick={handleOpen} sx={{backgroundColor:'black',color:'white'}}>
                  View Chart
                </Button>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
        </Stack>
      </Box>
      <Box>
        <Stack direction='row' 
               sx={{mx:'auto',
                  display: 'flex',
                  justifyContent:'space-evenly',
                  flexWrap: 'wrap',
                  mx:10,
                  my:10
                  }}>
            
      <Paper elevation={20} sx={{width:400,height:500,my:5}} />
      
      
   

        </Stack>
      </Box>

    </div>
  )
}
