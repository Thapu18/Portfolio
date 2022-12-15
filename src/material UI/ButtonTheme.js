import { createTheme } from "@material-ui/core/styles";

export const BtnTheme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Roboto)',
          fontWeight: 'var(--fw-light)',
          letterSpacing: '2px',
          fontSize: '14px',
          color: 'var(--color-white)',
          border:'1px solid var(--btn-border-color)',
          textTransform: 'none',
          borderRadius: '30px',
          padding: '19px 32px',
          transition: 'all .6s ease',
          cursor: 'pointer',
          '&.MuiButtonBase-root:hover':{
            border:'1px solid var(--btn-hover-bg-color)',
            backgroundColor: 'var(--bg-color-light)',
          }
        },
      }
    }
  }
});

export const formBtnTheme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontFamily: 'var(--font-family-Roboto)',
          fontWeight: 'var(--fw-light)',
          letterSpacing: '2px',
          fontSize: '14px',
          color: 'var(--color-white)',
          border:'1px solid var(--btn-border-color)',
          textTransform: 'none',
          borderRadius: '30px',
          padding: '15px 52px',
          transition: 'all .6s ease',
          cursor: 'pointer',
          '&.MuiButtonBase-root:hover':{
            border:'1px solid var(--color-white)',
            backgroundColor: 'var(--color-white)',
            color:'var(--bg-color-dark)',
            fontWeight:'var(--fw-bold)',
          }
        },
      }
    }
  }
});
