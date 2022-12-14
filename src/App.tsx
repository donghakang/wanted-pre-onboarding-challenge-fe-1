import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth'
import MainPage from './pages/Main'
import NotFoundPage from './pages/404'
import RegisterPage from './pages/Register'

import { Global, ThemeProvider } from '@emotion/react'
import theme from './styles/theme'

import { global } from './styles/Global'
import { LoginProvider } from './context/LoginContext'

function App() {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:mode" element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LoginProvider>
  )
}

export default App
