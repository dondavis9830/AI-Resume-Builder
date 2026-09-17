import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FcRules } from "react-icons/fc";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { Link, Links } from 'react-router-dom';


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




export default function Header() {

  return (
        <div>
<Box sx={{ flexGrow: 1 }}>
  <AppBar
    position="fixed"
    sx={{
      backgroundColor:'#26c6da',
      color: '#111',
      height: { xs: '70px', md: '80px' },
      justifyContent: 'center',
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    }}
  >
    <Toolbar
      sx={{
        px: { xs: 2, sm: 3, md: 5 },
        gap: { xs: 1, md: 2 },
      }}
    >

      {/* Logo */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: { xs: 0, md: 1 } }}
      >
        <FcRules size={28} />
      </IconButton>

      {/* Title */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          fontFamily: '-moz-initial',
          fontWeight: 700,
          fontSize: {
            xs: '20px',
            sm: '24px',
            md: '30px',
          },
          whiteSpace: 'nowrap',
        }}
      >
        AI Resume Builder
      </Typography>

      {/* Desktop Navigation */}
      <Stack
        direction="row"
        spacing={{ md: 1, lg: 2 }}
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >

        <Link
          to={'/all-resume'}
          style={{ textDecoration: 'none' }}
        >
          <Button
            sx={{
              color: '#111',
              fontWeight: 700,
              fontSize: { md: 14, lg: 16 },
            }}
          >
            All Resumes
          </Button>
        </Link>

        <Link
          to="/downloads"
          style={{ textDecoration: 'none' }}
        >
          <Button
            sx={{
              color: '#111',
              fontWeight: 700,
              fontSize: { md: 14, lg: 16 },
            }}
          >
            All Downloads
          </Button>
        </Link>

        
          <Tooltip title="ai powerd resume letter">
            <Button
            sx={{
              color: '#111',
              fontWeight: 700,
              fontSize: { md: 14, lg: 16 },
            }}
          >
            About Us
          </Button>
          </Tooltip>

      </Stack>

      {/* Mobile Menu */}
      <IconButton
        sx={{
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <MenuIcon />
      </IconButton>

    </Toolbar>
  </AppBar>
</Box>

    </div>
  )
}
