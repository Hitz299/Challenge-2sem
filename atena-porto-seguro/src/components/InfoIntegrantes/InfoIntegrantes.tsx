import { StyledGitHub, StyledImgIntegrante, StyledIntegrantesInfo } from "../../style/styled-cadastro";



export default function InfoIntegrantes() {


        return (
                <>

                        <StyledIntegrantesInfo>
                                <figure>
                                        <StyledImgIntegrante src="/Gabriel-Yuji.jpeg" alt="Gabriel Yuji"
                                                largura="24%" />
                                </figure>

                                <figure>
                                        <StyledImgIntegrante src="/Gustavo-de-Aguiar.jpeg" alt="Gustavo de Aguiar"
                                                largura="30%" />
                                </figure>

                                <figure>
                                        <StyledImgIntegrante src="/Nathan-Magno.jpeg" alt="Nathan Magno"
                                                largura="40%" />
                                </figure>

                                <span>Gabriel Yuji Suzuki</span>
                                <span>Gustavo de Aguiar Lima Silva</span>
                                <span>Nathan Magno</span>
                                <span>RM 556588</span>
                                <span>RM 557707</span>
                                <span>RM 558987</span>

                                <a href="https://github.com/Nanfer12007" target="_blank"><StyledGitHub
                                        src="/github-icone.png"
                                        alt="git hub Gabriel" /></a>
                                <a href="https://github.com/gudeaguiar" target="_blank"><StyledGitHub
                                        src="/github-icone.png"
                                        alt="git hub Gustavo" /></a>
                                <a href="https://github.com/Hitz299" target="_blank"><StyledGitHub
                                        src="/github-icone.png"
                                        alt="git hub Nathan" /></a>

                        </StyledIntegrantesInfo>


                </>
        )
}
