import { StyleFundoInicial, StyleServicosContainer } from "../../style/style-tela-inicial";

interface BgInicialProps {
    children: React.ReactNode;
}


export default function BgInicial({ children }: BgInicialProps) {
    return (
        <>
            <main>

                <StyleFundoInicial>

                    <StyleServicosContainer>
                        {children}
                    </StyleServicosContainer>

                </StyleFundoInicial>

            </main>

        </>
    )
}
