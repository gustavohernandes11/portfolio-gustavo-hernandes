import App from '../components/App'
import Container from '../components/Container'
import SocialBar from '../components/SocialBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <App>
      <SocialBar />
      <Container main>
        <h1>Gustavo Hernandes</h1>
        <p>Desenvolvedor Front-End</p>
        <a href="#sobre"><button>Saiba mais</button></a>
      </Container>
      <Container color="#282631">
        <h1 id="sobre">Sobre</h1>
      </Container>
      <Container color="#25232e">
        <h1 id="tecnologias">Tecnologias</h1>
      </Container>
      <Container color="#22202b">
        <h1 id="projetos">Projetos</h1>
      </Container>
      <Container color="#1c1a25">
        <h1 id="contato">Contato</h1>
      </Container>
      <Footer>footer</Footer>
    </App>
  )
}
