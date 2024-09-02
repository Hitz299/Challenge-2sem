
import { StyleCabecalhoAzul} from '../../style/styled-cadastro'

interface CabecalhoAzulProps
{
  titulo: string
}

export default function CabecalhoAzul({titulo}:CabecalhoAzulProps) {
  return (
    <>
    <StyleCabecalhoAzul>
      <h1>{titulo}</h1>
    </StyleCabecalhoAzul>
  </>
  )
}
