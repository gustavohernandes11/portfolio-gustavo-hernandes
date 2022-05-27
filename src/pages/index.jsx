
import App from '../components/App'
import Container from '../components/Container'
import ContainerTitle from '../components/ContainerTitle'
import SocialBar from '../components/SocialBar'
import Footer from '../components/Footer'
import AboutMeContainer from '../components/AboutMeContainer'
import ProjectContainer from '../components/ProjectContainer'
import TechContainer from '../components/TechContainer'

export default function Home() {

  return (
    <App>

      <Container full main>
        <h1>Gustavo Hernandes</h1>
        <p>Desenvolvedor Web</p>
        <SocialBar />
        <a href="#sobre"><button>Saiba mais</button></a>
      </Container>
        <AboutMeContainer />
      <TechContainer />
<ProjectContainer />
      <Footer/>
    </App>
  )
}
