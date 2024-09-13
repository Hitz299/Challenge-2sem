import { StyledFundoMeusVeiculos } from "../../style/styled-funcionalidades";

interface BgVeiculosProps {
  children: React.ReactNode;
}



export default function BgMeusVeiculos({children}:BgVeiculosProps) {
  return (
        <>
        
            <StyledFundoMeusVeiculos>
                    <main>
                        {children}
                    </main>


                
            </StyledFundoMeusVeiculos>
        
        
        </>
  )
}
