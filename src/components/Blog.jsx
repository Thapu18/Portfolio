import React,{ useEffect } from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';

import { BtnTheme } from '../material UI/ButtonTheme';
import { sectionHedingTypography } from '../material UI/typography';
import { translateAnim } from '../Animjs/common';

import blogImg from '../assets/images/blog.png';

const Blog = () => {
  let blogWrapperAnim = {
    selector:'blog-wrapper',
    classes:'translate-up',
  }
  useEffect(()=>{
    translateAnim(blogWrapperAnim);
  },[]);
  return (
    <Box
    className='blog-wrapper translate-up'
    id='blog-wrapper'>
      <Box
      className='blog-wrap'>
        <Box
        className='upper-section'>
          <Typography
            color='var(--light-whiteColor)'
            fontSize='18px'>
              || my Blog
          </Typography>
          <ThemeProvider theme={sectionHedingTypography}>
            <Typography
            sx={{fontSize:{sm:'43px',xs:'27px'}}}>
              Latest Tips & Tricks
            </Typography>
          </ThemeProvider>
        </Box>

        <Box
        className='blogs'>
          <Box
          className='single-blog'>
            <Box
            component='img'
            src={blogImg}
            width= '187px'
            height= '152px'
            borderRadius='10px'
            />
            <Box
            className='About-blog'>
              <Typography
                color='var(--light-whiteColor)'
                fontSize='15px'>
                  Dated:31-04-2022
              </Typography>
              <ThemeProvider theme={sectionHedingTypography}>
                <Typography
                  fontSize='30px'
                  marginTop='20px'>
                    Django Blog
                </Typography>
              </ThemeProvider>
            </Box>
            <ThemeProvider theme={BtnTheme}>
              <a>
                <Button>Read more</Button>
              </a>
            </ThemeProvider>
          </Box>
        </Box>  
      </Box>
    </Box>
  )
}

export default Blog;