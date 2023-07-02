import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Content} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#"><FiArrowLeft />Voltar</a>
      </header>

      <Content>
        <div className="imgUser">
          <img src="https://github.com/ruan-lazareti.png" alt="Imagem do Usuário" />
          <label htmlFor="imgSelect">
          <FiCamera />
          <input type="file" id="imgSelect"/>
          </label>
        </div>

        <Input 
        type="text"
        icon={FiUser}
        placeholder="Nome Completo"/>

        <Input 
        type="text"
        icon={FiMail}
        placeholder="Email"/>

        <Input 
        type="password"
        icon={FiLock}
        placeholder="Senha atual"/>
        
        <Input 
        type="password"
        icon={FiLock}
        placeholder="Nova senha"/>

        <Button title="Salvar"/>
      </Content>
    </Container>
  )
}