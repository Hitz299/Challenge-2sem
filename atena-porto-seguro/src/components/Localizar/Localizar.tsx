import { StyledLocalizar } from "../../style/styled-funcionalidades";

interface LocalizarProps {
  children: React.ReactNode;
}

export default function Localizar({children}: LocalizarProps) {
  return (
    <>
    
        <StyledLocalizar>
                <main>
                    {children}
                </main>
        </StyledLocalizar>
    
    </>
  )
}
