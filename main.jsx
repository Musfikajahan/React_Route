import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRoutes} />
    <Toaster />
  </React.StrictMode>,
)