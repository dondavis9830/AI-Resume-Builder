import React from 'react'
import './Home.css'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export default function Home() {
  return (
    <div>
      {/* hero section */}
      <section id='hero'>
        <Box 
          sx={{
            bgcolor:'white',
            opacity:'10',
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            backgroundImage:'url(https://static.vecteezy.com/system/resources/previews/046/256/423/non_2x/items-on-black-table-background-design-of-random-objects-on-table-free-photo.jpg)',
            backgroundAttachment:'fixed',
            backgroundSize:'cover'
        }}>
         <Stack sx={{display:'flex',
                     justifyContent:'center',
                     alignItems:'center',
                     backgroundColor:'rgba(255,255,255)',
                     height:'30vh',
                     my:'auto',
                     border:1,
                     p:3,
                     borderRadius:'20px'}}>
           <Typography variant='h4'
          sx={{
              color:'black',
              fontFamily:'-moz-initial',
              fontWeight:'700'
              
          }}>
            AI Resume Builder
          </Typography>
          <Typography variant='h4'
          sx={{
              fontFamily:'-apple-system',
              fontWeight:'500',
              py:3

          }}>
            Let AI turn your experience into your next opportunity.
          </Typography>
          <Link to={'/info'} ><Button 
          sx={{
            color:'white',
            backgroundColor:'brown',
            padding:2,
            fontFamily:'cursive'
          }}>
            Build Your Resume 
          </Button></Link>

         </Stack>
        </Box>
      </section>
      {/* introduction of ai resume builder */}
      <section>
         <Box sx={{}}>
          <Container>
            <Typography variant='h3' 
                        sx={{
                          fontFamily:'-moz-initial',
                          display:'flex',
                          justifyContent:'center' ,
                          alignItems:'center' ,
                          marginTop:5   
                        }}
            >
              What's Ai Resume Builder
            </Typography>
            <Stack direction="row" 
                   sx={{
                      display:'flex',
                      justifyContent:'space-between',
                      gap:5,
                      my:10
          }}>
            <Box sx={{width:'50%',alignItems:'center',justifyContent:'center',my:'auto'}}>
              <Typography variant='h6' sx={{fontWeight:'500'}}>
                An AI Resume Builder is a smart web application designed to help users create professional and job-ready resumes quickly and easily. The application uses Artificial Intelligence to assist users in writing and improving important resume sections such as the professional summary, skills, work experience, and project descriptions.
              </Typography>
            </Box>
            <Box sx={{width:'50%'}}>
              <img src="https://th.bing.com/th/id/OIP.GtM0lSHxb_aQ45i7a_SwcgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </Box>

          </Stack>
          </Container>
        </Box>
      </section>
      {/* position fixed image */}
      <section>
          <Box sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            backgroundImage:'url(https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-hillaryfox-1595385.jpg&fm=jpg)',
            backgroundRepeat:'no-repeat',
            backgroundAttachment:'fixed',
            backgroundSize:'cover'
        }}>
          </Box>
      </section>
      {/* Testimonial */}
      <section>
        <Box>
          <Container sx={{
             
          }}>
            <Typography variant='h3' sx={{my:5,textAlign:'center',fontFamily:'-moz-initial'}}>
              Testimonial
            </Typography>
            <Box sx={{display:'flex',justifyItems:'center',alignItems:'center',gap:3}}>
              {/* card-1 */}
              <Box sx={{border:1,boxShadow:'xl',p:3,width:'300px'}}>
                <Box sx={{display:'flex',justifyItems:'center',alignItems:'ceter',gap:3}}>
                  <Box >
                    <img style={{width:'100px'}} src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?cs=srgb&dl=pexels-doquyen-1520760.jpg&fm=jpg" alt="" />
                  </Box>
                  <Typography variant='h5' sx={{my:'auto',fontFamily:'fantasy'}}>
                      Usha Thalrany
                  </Typography>
                </Box>
                <Typography variant='h5'
                            sx={{
                              fontFamily:'-moz-initial',
                              p:1
                            }}>
                      iam very satisfied with this ai resume builder
                </Typography>
              </Box>
              {/* card-2 */}
              <Box sx={{border:1,boxShadow:'xl',p:3,width:'300px'}}>
                <Box sx={{display:'flex',justifyItems:'center',alignItems:'ceter',gap:3}}>
                  <Box >
                    <img style={{width:'100px'}} src="https://www.bing.com/th/id/OIP.so5s5QgNUgKSgouiR2R1zQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="" />
                  </Box>
                  <Typography variant='h5' sx={{my:'auto',fontFamily:'fantasy'}}>
                      Preethy NM
                  </Typography>
                </Box>
                <Typography variant='h5'
                            sx={{
                              fontFamily:'-moz-initial',
                              p:1
                            }}>
                      It's very simple to use.It's very helpfull.
                </Typography>
              </Box>
              {/* card-3 */}
              <Box sx={{border:1,boxShadow:'xl',p:3,width:'300px'}}>
                <Box sx={{display:'flex',justifyItems:'center',alignItems:'ceter',gap:3}}>
                  <Box >
                    <img style={{width:'100px'}} src="https://www.bing.com/th/id/OIP.x5x6n0FnJPwDv9xrUtlezQHaHb?w=193&h=194&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="" />
                  </Box>
                  <Typography variant='h5' sx={{my:'auto',fontFamily:'fantasy'}}>
                      Marco JP
                  </Typography>
                </Box>
                <Typography variant='h5'
                            sx={{
                              fontFamily:'-moz-initial',
                              p:1
                            }}>
                      It's looking cool,and simple to handle our details.
                </Typography>
              </Box>

            </Box>
          </Container>
        </Box>
      </section>

    </div>
  )
}
