import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function Preview({resumeDetails}) {
 console.log(resumeDetails);
 


  return (
    <div>
      <Box>
         <Stack direction='column' 
             sx={{
              justifyContent:'start',
              alignItems:'start',
          
             }}>
        <h1>Resume</h1>
        
        <Paper sx={{
               width:500,
               height:'auto',
               
               
        }}>
          <Stack direction='column' 
          sx={{
            gap:1,
            padding:5,

          }}>
          <Typography variant='h5' sx={{fontWeight:700,fontFamily:'-moz-initial'}}>{resumeDetails?.name}</Typography>
          <Stack direction='row'>
            <Typography>Email:{resumeDetails?.email}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Email:{resumeDetails?.contactNumber}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>LinkedIn:{resumeDetails?.linkedin}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Github:{resumeDetails?.github}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Location:{resumeDetails?.location}</Typography>
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
           {resumeDetails?.summary}
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
         {resumeDetails?.skill?.map(item=>(
          <Button key={item}>{item}</Button>
         ))}
          
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
            <Typography>Degree:{resumeDetails?.degree}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Collage:{resumeDetails?.college}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography>Year of Graduation:{resumeDetails?.year}</Typography>
          </Stack>
        
          
        </Stack>
       
        </Paper>

      </Stack>
      </Box>
    </div>
  )
}
