import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import AuthProvider from './context/Auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
        <Toaster />
      </Router>
    </AuthProvider>
  </StrictMode>,
)
