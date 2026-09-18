import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { FaBackward } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom'
import { downloadSavedResumAPI, viewResumeAPI } from '../services/apiServices'
import Swal from 'sweetalert2'
import Edit from '../Components/Edit'





export default function View() {

  const [resume,setResume]=useState({})
  const [resumedata,setResumedata]=useState({})
  const {id} =useParams()
  // console.log(id);
  const navigate=useNavigate()

  const backToHome=async()=>{
    navigate('/')
  }

  const viewResume = async(id) => {
    try{
      // console.log(`don`)
      const res = await viewResumeAPI(id)
      // console.log(res.data);
      setResume(res.data)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{viewResume(id)},[])

  const downloadCV=async()=>{
    try{
      const Data = downloadSavedResumAPI(resume)
      console.log(Data);
      Swal.fire({
        title: "Download Compleated....",
        icon: "success",
        draggable: true
  });
      
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{downloadCV(id)},[])
 


  return (
    <div>
      {/* main content */}
      <Box>
        {/* button group */}
        <Box>
          <Stack direction='row'
                 sx={{justifyContent:'center' , 
                      gap:5 , 
                      mt:10 , 
                      p:5
                      }}>
            <Stack direction='row' sx={{justifyContent:'center',alignItems:'center' , }}>
              <FaDownload />
              <Button onClick={downloadCV} sx={{color:'crimson',}}> Download CV</Button>
            </Stack>
            <Stack direction='row' sx={{justifyContent:'center',alignItems:'center' , }}>
              {/* <CiEdit /> */}
              <Edit/>
            </Stack>
            <Stack direction='row' sx={{justifyContent:'center',alignItems:'center' , }}>
              <FaBackward />
              <Button onClick={backToHome} sx={{color:'crimson',}}>Home</Button>
            </Stack>
            
            {/* modal body */}

          </Stack>
        </Box>
        {/* papper content for download and edit */}
        <Box sx={{ display:'flex', justifyContent:'center'}} >
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
           <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Name:{resume.name}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Email:{resume.email}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Phone Number:{resume.contactNumber}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>LinkedIn:{resume.linkedin}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Github:{resume.github}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Location:{resume.location}</Typography>
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
          {resume.summary}
           
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
         {resume.skill?.map(item=>(
          <Stack direction='row' sx={{flexWrap:'wrap'}} key={item}>{item}</Stack>
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
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Degree:{resume.degree}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Collage:{resume.college}</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography sx={{fontStyle:'revert-layer', fontWeight:600}}>Year of Graduation:{resume.year}</Typography>
          </Stack>
        
          
        </Stack>
       
        </Paper>
        </Box>
      </Box>
    </div>
  )
}
