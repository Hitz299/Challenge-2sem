
import { StyledCabecalhoAzul} from '../../style/styled-cadastro'

interface CabecalhoAzulProps
{
  titulo: string
}

export default function CabecalhoAzul({titulo}:CabecalhoAzulProps) {
  return (
    <>
    <StyledCabecalhoAzul>
      <h1>{titulo}</h1>
    </StyledCabecalhoAzul>
  </>
  )
}
