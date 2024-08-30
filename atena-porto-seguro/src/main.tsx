import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import EsqueciSenha from './routes/EsqueciSenha/index.tsx'
import AdicionarVeiculos from './routes/AdicionarVeiculos/index.tsx'
import CriarConta from './routes/CriarConta/index.tsx'
import Home from './routes/Home/index.tsx'
import LocalizarVeiculos from './routes/LocalizarVeiculos/index.tsx'
import RedefinirSenha from './routes/RedefinirSenha/index.tsx'
import MinhaConta from './routes/MinhaConta/index.tsx'
import ChatBot from './routes/ChatBot/index.tsx'
import MeusVeiculos from './routes/MeusVeiculos/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'

const routes = createBrowserRouter([
  {path:"/", element:<App/>,errorElement:<Error/>,children:
  [
     {
        path: "/",
        element: <Navigate to="/login" replace />
      },
    {path:"/login",element:<Login/>},
    {path:"/login/recuperar/senha",element:<EsqueciSenha/>},
    {path:"/login/recuperar/senha/redefinir/senha",element:<RedefinirSenha/>},
    {path:"/login/criar/conta",element:<CriarConta/>},
    {path:"/home",element:<Home/>},
    {path:"/home/adicionar/veiculos",element:<AdicionarVeiculos/>},
    {path:"/home/integrantes",element:<Integrantes/>},
    {path:"/home/meus/veiculos",element:<MeusVeiculos/>},
    {path:"/home/chatbot",element:<ChatBot/>},
    {path:"/home/minha/conta",element:<MinhaConta/>},
    {path:"/home/meus/veiculos/localizar/veiculos",element:<LocalizarVeiculos/>},
  ]}
  ])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
