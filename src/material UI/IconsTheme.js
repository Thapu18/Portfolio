import { createTheme } from "@material-ui/core";

export const IconTheme = createTheme({
  components:{
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          cursor:'pointer',
          fontSize:'60px',
          color:'var(--color-white)',
          border:'1px solid var(--color-white)',
          padding:'10px',
          borderRadius:'50%',
          background: 'var(--bg-color-dark)',
          transition: 'all 0.3s ease-in-out',
          '&:hover':{
            background: 'var(--color-white)',
            color:'var(--bg-color-light)',
          }
        }
      }
    }
  }
});