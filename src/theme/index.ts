import { black, green, grey, red, white, yellow, blue } from './colors'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: 400,
  },
  color: {
    black,
    grey,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    white,
    yellow,
    blue,
  },
  siteWidth: 1170,
  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 48,
    8: 64,
  },
  topBarSize: 72
}

export default theme