import { Outlet } from "react-router-dom"
import { StyleGeral } from "./style/styledGeral"


export default function App() {
  return (
    <>
    <StyleGeral/>
      <Outlet/>
    
    </>
  )
}
