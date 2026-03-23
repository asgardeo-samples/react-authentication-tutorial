import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="[your-app-client-id]"
      baseUrl="[your-organization-name]"
      scopes="openid profile"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
)