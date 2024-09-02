import { StyledContainerNotFound, StyledImgNotFound } from "../../style/style-erro404";



export default function Error() {

    document.title = "Erro 404";

  return (
    
    <>
      <StyledContainerNotFound>
     <figure>
      <StyledImgNotFound src="../../../public/404.png" alt="Erro 404, Página não encontrada" />
     </figure>
     </StyledContainerNotFound>
  </> 
  )
}
