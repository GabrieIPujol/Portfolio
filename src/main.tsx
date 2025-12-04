import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/app/global.css'
import App from '../src/app/page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
