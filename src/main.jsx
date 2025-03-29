import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import { DarkBackgroundProvider } from './context/DarkBackgroundContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DarkBackgroundProvider>
        <RouterProvider router={routes}></RouterProvider>
      </DarkBackgroundProvider>
    </AuthProvider>
  </StrictMode>
)
