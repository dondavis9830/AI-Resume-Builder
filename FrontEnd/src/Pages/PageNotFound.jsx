import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function PageNotFound() {
  return (
    <div>
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:15
      }}>
        <Typography variant='h4' sx={{fontFamily:'monospace'}}>
          404 Page Not Found
        </Typography>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXF0bTF6bmc5cDg5aHdueHBqYTg0Z2xmZWE5MWFzZ29vbTJjMDN2cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3ymJ5oYZefwCuoZDa/giphy.gif" alt="" />
      </Box>
    </div>
  )
}


