import React,{useEffect} from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';
import Form from './Form';
import ContactLink from './ContactLink';

import { translateAnim } from '../Animjs/common';
import { sectionHedingTypography } from '../material UI/typography';


const Contact = () => {
  let contactWrapperAnim = {
    selector:'contact-wrapper',
    classes:'translate-contact',
  }
  useEffect(()=>{
    translateAnim(contactWrapperAnim);
  },[]);

  return (
    <Box
    className='contact-wrapper translate-contact'
    id='contact-wrapper'>
      <Box
      className='contact-wrap'>
        <Box
        className='contact-upper-section'>
        <Typography
              color='var(--light-whiteColor)'
              fontSize='18px'>
               Have questions ? 
            </Typography>
            <ThemeProvider theme={sectionHedingTypography}>
              <Typography
              sx={{fontSize:{sm:'43px',xs:'30px'}}}>
                 Contact me
                </Typography>
            </ThemeProvider>
        </Box>
        <Form/>
      </Box>
      <ContactLink/>
    </Box>
  )
}

export default Contact;