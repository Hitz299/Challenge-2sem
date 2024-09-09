import { StyledFundoInicial, StyledServicosContainer } from "../../style/style-tela-inicial";

interface BgInicialProps {
    children: React.ReactNode;
}


export default function BgInicial({ children }: BgInicialProps) {
    return (
        <>

                <StyledFundoInicial>
            <main>

                    <StyledServicosContainer>
                        {children}
                    </StyledServicosContainer>
            </main>

                </StyledFundoInicial>


        </>
    )
}
