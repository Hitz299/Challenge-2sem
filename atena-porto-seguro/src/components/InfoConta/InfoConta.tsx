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
            <p>Nome:</p>
            <StyledContainerInfoConta>
                <p>Roberto</p>
                <MdDriveFileRenameOutline/>
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <p>Data de nascimento:</p>
            <StyledContainerInfoConta>
                <p>11/10/2002</p>
                <IoDocumentText />
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <p>Nome:</p>
            <StyledContainerInfoConta>
                <p>Nathan Magno</p>
                <MdEmail />
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <p>Nome:</p>
            <StyledContainerInfoConta>
                <p>Nathan Magno</p>
                <FaAddressCard/>
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <p>Nome:</p>
            <StyledContainerInfoConta>
                <p>Nathan Magno</p>
                <FaPhone />
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>

            <StyledContainerDadosConta>
            <p>Nome:</p>
            <StyledContainerInfoConta>
                <p>Nathan Magno</p>
                <IoHomeSharp/>
            </StyledContainerInfoConta>
          </StyledContainerDadosConta>


        </StyledConta>
    
    
    </>

    

  )
}
