import React,{useEffect} from 'react';
import { Box,Typography,ThemeProvider } from '@mui/material';

import { sectionHedingTypography } from '../material UI/typography';
import { translateAnim } from '../Animjs/common';


import { serviceData } from '../data';


const Services = () => {

  let serviceWrapperAnim = {
    selector:'services-wrappper',
    classes:'translate-up',
  };
  let serviceBoxAnim = {
    selector: 'service-box-container',
    classes:'translate-left'
  }
  useEffect(() => {
    translateAnim(serviceWrapperAnim);
    translateAnim(serviceBoxAnim);

  }, []);
  return (
    <Box
    className='services-wrappper translate-up'
    id='services-wrapper'>
     <Box
     className='services-wrap'>
       <Box>
          <Typography
          color='var(--light-whiteColor)'
          fontSize='18px'>
            || My Services 
          </Typography>
       </Box>
       <Box>
         <ThemeProvider theme={sectionHedingTypography}>
          <Typography
            sx={{fontSize:{sm:'43px',xs:'26px'}}}>
              Services provided by me 
            </Typography>
         </ThemeProvider>
       </Box>
       <Box
       className='service-box-container translate-left'>
          {
            serviceData.map((service,index)=>(
              <Box
              key={index}
              className='service-box'
              sx={{
                width:{lg:'350px',md:'305px'}
              }}>
                <Box
                component='img'
                src={service.image}
                alt='website'
                width='100px'
                marginBottom='30px'
                />
                <Box>
                  <ThemeProvider theme={sectionHedingTypography}>
                    <Typography
                    className='service-title'
                    >
                      {service.title}
                    </Typography>
                  </ThemeProvider>
                </Box>
              </Box>
            ))
          }
       </Box>
     </Box>
    </Box>
  )
}

export default Services;