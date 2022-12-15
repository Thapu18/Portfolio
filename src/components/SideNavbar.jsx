import React, { useEffect } from 'react';

import { Stack,Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const SideNavbar = ({setSideNavbarOpen,NavbarOpen}) => {
  
    useEffect(()=>{
      const sideNavbar = document.querySelector('.side-navbar-wrapper');
      NavbarOpen? sideNavbar.style.transform = 'translateX(0%)' : sideNavbar.style.transform = 'translateX(100%)';
    },[NavbarOpen]);

    const handleClearEvent = () =>{
      setSideNavbarOpen(false);
    }


  return (
    <Box
    className='side-navbar-wrapper'
    >
      <Box
      className='side-navbar'>
        <Box 
        component='span'
        className='close-icon'>
          <ClearIcon
          onClick={() => handleClearEvent()}
          sx={{
            color:'var(--text-color)',
            fontSize:'50px',
            border:'1px solid var(--btn-border-color)',
            borderRadius:'50%',
            padding:'10px',
            cursor:'pointer',
            transition:'all 0.3s ease',
            '&:hover':{
              backgroundColor:'var(--bg-color-light)',
              color:'var(--color-white)'
            }
          }}/>
        </Box>
        <Box>
        <Stack
          spacing={5}>
            <a 
              href='#hero-banner-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Home</a>
            <a 
              href='#services-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Services</a>
            <a 
              href='#skills-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Skills</a>
            <a 
              href='#project-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Work</a>
            <a 
              href='#blog-wrapper'
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Blog</a>
            <a 
              href='#contact-wrapper' 
              onClick={() => setSideNavbarOpen(false)}
              className='nav-link'>Contact</a>
        </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default SideNavbar;