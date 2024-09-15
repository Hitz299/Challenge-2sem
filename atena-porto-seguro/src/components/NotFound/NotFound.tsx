import { StyledContainerNotFound, StyledImgNotFound } from "../../style/style-erro404";


export default function NotFound() {
  return (
    <>
        <StyledContainerNotFound>
        <figure>
          <StyledImgNotFound src="/404.png" alt="Erro 404, Página não encontrada" />
        </figure>
      </StyledContainerNotFound>
    </>
  )
}
