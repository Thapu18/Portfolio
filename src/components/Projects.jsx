import React,{useEffect} from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';
import { sectionHedingTypography } from '../material UI/typography';
import { BtnTheme } from '../material UI/ButtonTheme';

import { translateAnim,translateAnimAll } from '../Animjs/common';
import { projectData } from '../data'

const Projects = () => {
  let projectWrapperAnim = {
    selector:'project-wrapper',
    classes:'translate-up',
  }

  let singleProjectAnim = {
    selector:'project',
    classes:'translate-up',
  }

  useEffect(()=>{
    translateAnim(projectWrapperAnim);
    translateAnimAll(singleProjectAnim)
  },[]);
  return (
    <Box
    className='project-wrapper translate-up'
    id='project-wrapper'>
      <Box
      className='project-wrap'>
        <Box
          className='project-text'>
            <Typography
              color='var(--light-whiteColor)'
              fontSize='18px'>
              || My Projects 
            </Typography>
            <ThemeProvider theme={sectionHedingTypography}>
              <Typography
              sx={{fontSize:{sm:'43px',xs:'28px'}}}>
                  My Complete Projects.
                </Typography>
            </ThemeProvider>
          </Box>
          <Box
          className='single-project-wrapper'>
            {
              projectData.map((project,index)=>(
                <Box
                  className='project translate-up'
                  key={index}>
                    <Box
                    className='project-image-wrapper'
                    sx={{
                      '&::after':{
                        backgroundImage:`url(${project.bgImage})`,
                      }
                    }}>
                      <Box
                      component='img'
                      className='project-img'
                      src={project.image}
                      />
                    </Box>
                    <Box
                    className='About-project'
                    >
                      <ThemeProvider theme={sectionHedingTypography}>
                        <Typography
                        sx={{fontSize:{sm:'30px',xs:'26px'}}}>
                          {project.title}
                        </Typography>
                      </ThemeProvider>
                      <ThemeProvider theme={BtnTheme}>
                        <a 
                        href={project.link}
                        target="blank">
                         <Button>Check out</Button>
                        </a>
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

export default Projects;
