import React from 'react';
import { Box, Button } from '@mui/material';
import logo from '../assests/images/logo.svg';

export default function MuiNavBar() {
  return (
    <Box
      component="nav"
      sx={{
        // Keeps the background spanning the full width of the screen
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        backgroundColor: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxSizing: 'border-box',
      }}
    >
      {/* Inner container constraints the max-width and centers the contents */}
      <Box
        sx={{
          maxWidth: '1200px', // Adjust this value (e.g., 1000px, 1200px) to control how far apart they sit
          margin: '0 auto',   // Centers the navbar content on wide screens
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          py: { xs: 2, md: 2 },
          px: { xs: 3, md: 4 },
          boxSizing: 'border-box',
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* Clickable Logo Image */}
        <Box
          component="a"
          href="/"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: { xs: 45, md: 50 },
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Nav Links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 1.5, md: 4 },
          }}
        >
          <Button
            component="a"
            href="/about"
            color="inherit"
             className='nav-link'
            sx={{
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#ffffff', fontFamily: '"Averia Serif Libre", serif', fontWeight: 500, fontSize: 20
            }}
          >
            Mixer
          </Button>
          <Button
            component="a"
            href="/contact"
            color="inherit"
            className='nav-link'
             sx={{
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#ffffff', fontFamily: '"Averia Serif Libre", serif', fontWeight: 500, fontSize: 20
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
}