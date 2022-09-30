import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'

import { MyContext } from './myContext'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{ email: 'kauan@email.com'}} >
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
)
