import avertaBoldFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2'
import avertaFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F7F5F5;
    @media screen and (max-width: 950px) {
      padding: 10px;
    }
  }

  @font-face {
    font-family: 'Averta';
    font-display: swap;
    src: local('Averta'), local('Averta Bold'),
    url(${avertaFont}) format('woff2'),
    url(${avertaBoldFont}) format('woff');
  }

  /* EthHashInfo styles */
  .fZMulI {
    & > p:first-child {
      font-weight: bold;
    }
  }
`

export default GlobalStyle
