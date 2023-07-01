import { Container, Profile } from "./styles"
import { Input } from "../Input"

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título"/>

      <Profile>
        <div className="wrapper">
          <h2>Ruan Lazareti</h2>
          <a href="/">sair</a>
        </div>
        <img src="https://github.com/ruan-lazareti.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}