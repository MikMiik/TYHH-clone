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
  },
})

export default theme
