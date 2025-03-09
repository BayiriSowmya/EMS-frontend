import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import Allemployees from './Components/Allemployees.jsx'
import HeaderComponent from './Components/HeaderComponent.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>
)
