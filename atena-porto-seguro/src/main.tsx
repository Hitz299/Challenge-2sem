import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import RecuperarSenha from './routes/RecuperarSenha/index.tsx'

const routes = createBrowserRouter([
  {path:"/", element:<App/>,errorElement:<Error/>,children:
  [
    {path:"/login",element:<Login/>},
    {path:"/recuperar/senha",element:<RecuperarSenha/>},
  ]}
  ])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
