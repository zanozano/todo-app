import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModeProvider } from './context/ModeProvider.jsx'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
)
