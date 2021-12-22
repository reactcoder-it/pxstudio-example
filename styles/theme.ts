import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6161'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    h1: {
      fontFamily: "Noto Serif, serif",
    },
    h2: {
      fontFamily: "Noto Serif, serif",
    },
    h3: {
      fontFamily: "Noto Serif, serif",
    },
    h4: {
      fontFamily: "Noto Serif, serif",
    },
    h5: {
      fontFamily: "Noto Serif, serif",
    },
    h6: {
      fontFamily: "Noto Serif, serif",
    },
  },
})

export default theme