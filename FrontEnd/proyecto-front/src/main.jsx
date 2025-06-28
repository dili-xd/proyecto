import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './routes/Routing'
import "../src/styles/Globales.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Routing/>
  </StrictMode>,
)
