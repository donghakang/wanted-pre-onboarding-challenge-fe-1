import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      gray: string
      black: string
      dark: string
      primary: {
        300: string
        400: string
        500: string
        600: string
        700: string
      }
      warning: string
    }

    screen: { mobile: string }
  }
}
