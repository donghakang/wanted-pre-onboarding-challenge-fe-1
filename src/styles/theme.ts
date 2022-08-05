import { Theme } from '@emotion/react'

const colors = {
  white: '#ffffff',
  gray: '#F9F9FA',
  dark: '#cccccc',
  black: '#1a1a1a',
  primary: {
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
  },
  warning: '#ff1744',
}

const screen = {
  mobile: '@media only screen and (max-width: 768px)',
}

const theme: Theme = {
  colors,
  screen,
}

export default theme
