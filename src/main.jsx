import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GIfExperteApp } from './GIfExperteApp'

import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GIfExperteApp />
  </StrictMode>
)
