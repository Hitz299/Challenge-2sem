import { Outlet } from "react-router-dom"
import { StyledGeral } from "./style/styledGeral"


export default function App() {
  return (
    <>
    <StyledGeral/>
      <Outlet/>
    </>
  )
}
