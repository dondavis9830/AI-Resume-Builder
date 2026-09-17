import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import React from 'react'
import ResumeInput from '../Components/ResumeInput'
import Preview from '../Components/Preview'

 function Info() {
  const [resumeDetails,setResumeDetails]=React.useState({
    name:'',
    location:'',
    jobTitle:'',
    email:'',
    contactNumber:'',
    linkedin:'',
    github:'',
    degree:'',
    college:'',
    year:'',
    skill:[],
    summary:'',
  })
  return (
    <div>
      <Box sx={{mt:15}}>
        <Stack direction='row'
               sx={{
                justifyContent:'space-evenly',
                alignItems:'start',
                mx:15,
                my:15,
        }}>
          <Box>
            <ResumeInput resumeDetails={resumeDetails}
            setResumeDetails={setResumeDetails}/>
          </Box>
          <Box sx={{
            
          }}>
            <Preview resumeDetails={resumeDetails} />
          </Box>
        </Stack>
      </Box>
    </div>
  )
}

export default Info
