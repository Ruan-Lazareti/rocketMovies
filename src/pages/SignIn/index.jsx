import { Container, Form, Background } from './styles.js'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail}
        />
        <Input 
          placeholder="Senha" 
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar"/>

        <a href="#">Criar Conta</a>
      </Form>

      <Background />
    </Container>
  )
}