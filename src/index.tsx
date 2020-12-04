import { theme } from '@gnosis.pm/safe-react-components'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
