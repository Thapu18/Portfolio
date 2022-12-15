import React,{ useEffect } from 'react';
import { Box,ThemeProvider,Typography,Button } from '@mui/material';


import { BtnTheme } from '../material UI/ButtonTheme'
import { skills } from '../data';
import { sectionHedingTypography } from '../material UI/typography';
import { translateAnim } from '../Animjs/common';


const Skills = () => {

  let skillWrapperAnim = {
    selector: 'skills-wrapper',
    classes:'translate-up'
  }

  let skillBoxAnim = {
    selector: 'skills-right',
    classes:'translate-right'
  }

  useEffect(()=>{
    translateAnim(skillWrapperAnim);
    translateAnim(skillBoxAnim);
  },[]);
  return (
    <Box
    className='skills-wrapper translate-up'
    id='skills-wrapper'>
      <Box
      className='skills-wrap'>
        <Box
        className='skills-left'>
          <Box
          className='skills-text'>
            <Typography
              color='var(--light-whiteColor)'
              fontSize='18px'>
              || My Skills 
            </Typography>
            <ThemeProvider theme={sectionHedingTypography}>
              <Typography
              sx={{fontSize:{sm:'43px',xs:'30px'}}}>
                  My Skills Field Here.
                </Typography>
            </ThemeProvider>
          </Box>
          <Box component='span'>
            <ThemeProvider theme={BtnTheme}>
              <Button>Get Resume</Button>
            </ThemeProvider>
          </Box>
        </Box>
        <Box
        className='skills-right translate-right'>
          { skills.map((skill,index)=>(
             <Box
             key={index}
             className='skill-box'>
                <Box
                className='skill-info'>
                  <ThemeProvider theme={sectionHedingTypography}>
                    <Typography
                    fontSize='18px'>
                      {skill.name}
                    </Typography>
                    <Typography
                    fontSize='15px'>
                      {`${skill.level}%`}
                    </Typography>
                  </ThemeProvider>
                </Box>
                <Box width={skill.level+'%'} className='progressBar'></Box>
             </Box>
           ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Skills;