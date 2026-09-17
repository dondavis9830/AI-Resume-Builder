import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'


export default function Footer() {
  return (
    <div>
      {/* Footer */}
<Box
  sx={{
    backgroundColor: '#0a0a0a',
    color: 'white',
    mt: 20,
    py: 8,
    px: { xs: 3, sm: 5, md: 8 },
  }}
>
  <Container maxWidth="lg">
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 5, md: 8 }}
      justifycontent="space-between"
      alignitems={{ xs: 'flex-start', md: 'flex-start' }}
    >

      {/* Section 1 - About */}
      <Box sx={{ maxWidth: 380 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          Build Your Career.
          <br />
          Build Your Resume.
        </Typography>

        <Typography
          sx={{
            color: 'white',
            lineHeight: 1.8,
            fontSize: '15px',
          }}
        >
          Create a professional, job-ready resume with the power of AI.
          Make your skills and experience stand out and take the next step
          toward your dream career.
        </Typography>
      </Box>

      

      {/* Section 2 - Contact */}
      <Stack spacing={1.5} sx={{ minWidth: 230 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        >
          Contact Us
        </Typography>

        <Typography sx={{ color: 'white' }}>
          resumebuilder@gmail.com
        </Typography>

        <Typography sx={{ color: 'white' }}>
          +91 95445 983215
        </Typography>

        <Typography sx={{ color: 'white' }}>
          We'd love to hear from you!
        </Typography>
      </Stack>

    </Stack>

    {/* Bottom Line */}
    <Box
      sx={{
        borderTop: '1px solid #333',
        mt: 6,
        pt: 3,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontSize: '14px',
        }}
      >
        2026 AI Resume Builder. All rights reserved.
      </Typography>

      <Typography
        sx={{
          color: 'white',
          fontSize: '14px',
        }}
      >
        Crafted with AI to build a better career.
      </Typography>
    </Box>
  </Container>
</Box>
    </div>
  )
}
