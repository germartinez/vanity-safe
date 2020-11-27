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
  }

  @font-face {
    font-family: 'Averta';
    font-display: swap;
    src: local('Averta'), local('Averta Bold'),
    url(${avertaFont}) format('woff2'),
    url(${avertaBoldFont}) format('woff');
  }

  .web3connect-connect-button {
    outline: none;
    background: #008c73;
    border: 1px solid #008c73;
    color: #fff;
    cursor: pointer;
    transform: none;
  }
`

export default GlobalStyle
