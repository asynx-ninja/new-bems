import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { EventContextProvider } from './context/EventContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <EventContextProvider>
          <App />
        </EventContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
