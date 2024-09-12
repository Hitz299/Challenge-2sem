import { StyledConta, StyledContainerDadosConta, StyledContainerInfoConta } from "../../style/styled-conta";
import { IoHomeSharp  } from "react-icons/io5";
import { FaPhone  } from "react-icons/fa";
import { FaAddressCard  } from "react-icons/fa";
import { MdEmail  } from "react-icons/md";
import { IoDocumentText  } from "react-icons/io5";
import { MdDriveFileRenameOutline} from "react-icons/md";

export default function InfoConta() {
  return (
    <>  
    
        <StyledConta>
          
          <StyledContainerDadosConta>
            <legend>Nome: </legend>
            <StyledContainerInfoConta largura={16}>
                <p>Roberto</p>
                <MdDriveFileRenameOutline/>
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <legend>Data de nascimento: </legend>
            <StyledContainerInfoConta largura={16}>
                <p>11/10/2002</p>
                <IoDocumentText />
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <legend>Email vinculado: </legend>
            <StyledContainerInfoConta largura={25}>
                <p>robertin.da.zl@gmail.com</p>
                <MdEmail />
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <legend>CPF: </legend>
            <StyledContainerInfoConta largura={16}>
                <p>645.763.785-23</p>
                <FaAddressCard/>
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <legend>Celular: </legend>
            <StyledContainerInfoConta largura={16}>
                <p>11999999999</p>
                <FaPhone />
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <legend>Endereço: </legend>
            <StyledContainerInfoConta largura={16}>
                <p>Rua das alfaces 673</p>
                <IoHomeSharp/>
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>


        </StyledConta>
    
    
    </>

    

  )
}
