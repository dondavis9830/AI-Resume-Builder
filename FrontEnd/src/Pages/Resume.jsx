import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <div>
       <Box>
          <Stack>
            <Typography>
              Create an ATS friendly resume in minuits with AI 
            </Typography>
          </Stack>
       </Box>
       <Box sx={{mt:12}}>
        <Stack direction='row'
               sx={{
                justifyContent:'center',
                alignItems:'center',
                gap:10
               }}>
              <Paper sx={{width:400,height:200,justifyContent:'center',alignItems:'center'}} >
                <Typography variant='h5'
                            sx={{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                            }} >
                  Downloads Your Resume
                </Typography>
                <Typography variant='p'
                            sx={{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                              m:3,
                            }}>
                  Our ai will generate skills and summery
                </Typography>
              </Paper>
              <Paper sx={{width:400,height:200,justifyContent:'center',alignItems:'center'}} >
                <Typography variant='h5'
                            sx={{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                            }} >
                  Add Your Details
                </Typography>
                <Typography variant='p'
                            sx={{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                              m:3,
                            }}>
                  Our ai will generate skills and summery
                </Typography>
              </Paper>
        </Stack>
       </Box>
       <Box>
        <Stack sx={{justifyContent:'center',}}>
          <Link to={'/info'} ><Button>let's Strat</Button></Link>
        </Stack>
       </Box>
    </div>
  )
}
