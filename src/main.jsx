import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './pages/styles/theme.js'
import GlobalStyles from './pages/styles/global.js'
import { Routes } from './routes/index.jsx'
import { Profile } from './pages/Profile/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
