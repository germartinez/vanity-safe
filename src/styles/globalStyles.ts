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
  }

  @font-face {
    font-family: 'Averta';
    font-display: swap;
    src: local('Averta'), local('Averta Bold'),
    url(${avertaFont}) format('woff2'),
    url(${avertaBoldFont}) format('woff');
  }

  /* web3connect styles */
  .web3connect-connect-button {
    outline: none;
    background: #008c73;
    border: 1px solid #008c73;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    transform: none;
    padding: 0 25px;
    font-weight: normal;
    font-size: 14px;
    box-shadow: none;
  }
  .sc-bdVaJa {
    padding: 0;
  }
  .idCQSl {
    transform: none;
  }
  .idCQSl:hover {
    background: #005546;
    box-shadow: none;
    transform: none;
  }
`

export default GlobalStyle
