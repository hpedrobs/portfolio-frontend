import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './interfaces/App'
import UnderConstruction from './interfaces/Maintenance'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        {/* <UnderConstruction /> */}
    </StrictMode>
)
