import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router'
import Main from './Layout/Main'


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}>
      <Main></Main>
    </RouterProvider>
  </>,
)
