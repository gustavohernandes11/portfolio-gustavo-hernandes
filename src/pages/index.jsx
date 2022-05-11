import CRUDvueImage from '../assets/imgs/CRUDvue1.png'
import notepadImage from '../assets/imgs/notepadHome.png'

import App from '../components/App'
import Container from '../components/Container'
import ContainerTitle from '../components/ContainerTitle'
import Box from '../components/Box'
import SocialBar from '../components/SocialBar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ProjectCard from '../components/ProjectCard'
import AboutMeContainer from '../components/AboutMeContainer'
import TecnologyCard from '../components/TecnologyCard'


export default function Home() {
  return (
    <App>
      <SocialBar />
      <Container full main>
        <h1>Gustavo Hernandes</h1>
        <p>Desenvolvedor Web</p>
        <a href="#sobre"><button>Saiba mais</button></a>
      </Container>
      <Container className="flexrow" full color="#282631">
        <ContainerTitle id="sobre">Sobre </ContainerTitle>

        <AboutMeContainer />
      </Container>

      <Container full color="#25232e">
        <ContainerTitle color="crimson" id="tecnologias">Tecnologias </ContainerTitle>
        <p>linguagens e ferramentas comumente mais utilizadas em projetos</p>
        <h2>FrontEnd</h2>
        <div className="flexrow">
          <TecnologyCard content="Javascript" />
          <TecnologyCard content="HTML" />
          <TecnologyCard content="CSS" />
          <TecnologyCard content="Reactjs e seu ecossistema" />
          <TecnologyCard content="Vue e seu ecossistema" />
          <TecnologyCard content="Typescript" />
          <TecnologyCard content="Bootstrap" />
        </div>
        <h2>BackEnd</h2>
        <div className="flexrow">
          <TecnologyCard content="Nodejs" />
          <TecnologyCard content="Firebase" />
          <TecnologyCard content="Express" />
        </div>
        <h2>Banco de dados</h2>
        <div className="flexrow">
          <TecnologyCard content="Knex" />
          <TecnologyCard content="Postgresql" />
          <TecnologyCard content="Mongodb" />
        </div>
        <h2>Controle e criação</h2>
        <div className="flexrow">
          <TecnologyCard content="Git" />
          <TecnologyCard content="Github" />
          <TecnologyCard content="Figma" />
        </div>

      </Container>
      <Container full color="#22202b">
        <ContainerTitle id="projetos">Projetos </ContainerTitle>

        <ProjectCard
          description="Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1"
          alt="Projeto 1"
          src={CRUDvueImage}
          header="Projeto 1"
          githubLink=""
          deployLink=""

        />
        <ProjectCard
          description="Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1"
          alt="Projeto 1"
          src={notepadImage}
          header="Projeto 1"
          githubLink=""
          deployLink=""

        />
        <ProjectCard
          description="Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1Projeto 1"
          alt="Projeto 1"
          src={notepadImage}
          header="Projeto 1"
          githubLink=""
          deployLink=""

        />


      </Container>

      <Container color="#22202b">
        <div className="flexcolumn">
          <Box>
            <ContainerTitle color="blue" id="contato">Contato </ContainerTitle>
            <p>Me envie uma mensagem</p>
            <ContactForm />
          </Box>
        </div>

      </Container>
      <Footer>footer</Footer>
    </App>
  )
}
