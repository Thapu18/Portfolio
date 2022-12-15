import { createTheme } from "@material-ui/core";

export const logoTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Merriweather)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          fontSize: '32px',
          color: 'var(--color-white)',
        }
      }
    }
  }
});


export const HeroIntroTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Merriweather)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          color: 'var(--color-white)',
        }
      }
    }
  }
});


export const HeroSubHeadingTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'20px',
          fontFamily: 'var(--font-family-worksans)',
          fontWeight: 'var(--fw-medium)',
          letterSpacing: '2px',
          color: 'var(--light-whiteColor)',
        }
      }
    }
  }
});


export const sectionHedingTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Merriweather)',
          fontWeight: 'var(--fw-light)',
          letterSpacing: '1px',
          color: 'var(--color-white)',
        }
      }
    }
  }
})


export const errorTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          color:'red',
          letterSpacing:'1.6px',
          marginLeft:'10px',
          marginTop: '-20px',
          marginBottom: '-21px',
        }
      }
    }
  }
})