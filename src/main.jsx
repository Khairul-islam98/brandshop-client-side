import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>,
)
