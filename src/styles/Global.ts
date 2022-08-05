import { css } from '@emotion/react'

export const global = css`
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    background-color: hsl(240, 11%, 98%);
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'IBMPlexSansKR-Regular';
    color: #1a1a1a;
  }

  :root {
    --header-height: 57px;
  }
`
