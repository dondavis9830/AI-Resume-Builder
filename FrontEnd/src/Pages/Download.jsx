import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import React, { useEffect, useState } from 'react'
import { allDownloadedResumesAPI } from '../services/apiServices';
import Divider from '@mui/material/Divider';

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
  const [resumedata,setResumeData]=useState([])
  const viewDownloads=async()=>{
    try{
      const res = await allDownloadedResumesAPI()
      console.log(res.data);
      setResumeData(res.data)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{viewDownloads()},[])

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
                  my:10,
                  gap:5
                  }}>
            
        {
          resumedata.map(item=>(
            <Box>
              <Paper sx={{ width:400,height:'auto', }}>
          <Stack direction='column' 
          sx={{
            gap:1,
            padding:5,

          }}>
          <Typography variant='h5' sx={{fontWeight:700,fontFamily:'-moz-initial'}}>{item.name}</Typography>
          <Stack direction='row'>
            <Typography>Email:{item.email}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Email:{item.contactNumber}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>LinkedIn:{item.linkedin}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Github:{item.github}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Location:{item.location}</Typography>
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
           {item.summary}
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
        <Box>
         {item?.skill?.map(item=>(
          <Typography>{item}</Typography>
         ))}
          
          </Box>
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
            <Typography>Degree:{item.degree}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Collage:{item.college}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Year of Graduation:{item.year}</Typography>
          </Stack>
        
          
        </Stack>
       
        </Paper>
            </Box>
          ))
        }
        </Stack>
      </Box>
    </div>
  )
}
