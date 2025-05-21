import { extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#034c31',
        },
        background: {
          default: '#fff',
          paper: '#f5f5f5',
        },
      },
    },
    // dark: {
    //   palette: {
    //     primary: {
    //       main: '#90caf9',
    //     },
    //     background: {
    //       default: '#121212',
    //       paper: '#1e1e1e',
    //     },
    //   },
    // },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8,
  //       },
  //     },
  //   },
  // },
})

export default theme
