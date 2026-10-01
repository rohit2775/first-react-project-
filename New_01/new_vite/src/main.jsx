import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Rohit from './Rohit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Rohit />
  </StrictMode>,
)
