
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


import CRUDvueImage from '../assets/imgs/CRUDvue1.png'
import notepadImage from '../assets/imgs/notepadHome.png'
import calculatorImage from '../assets/imgs/calculadora2.png'


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

      <Container full color="#1b1b1b">
        <ContainerTitle color="crimson" id="tecnologias">Tecnologias </ContainerTitle>
        <p>Linguagens e ferramentas comumente mais utilizadas em projetos</p>
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
      <Container full color="#22202b" >
        <ContainerTitle id="projetos">Projetos </ContainerTitle>
<div className="flexrow">

        <ProjectCard
          description="Sistema de cadastro de usuários com leitura, alteração, remoção e inserção de informações num Banco de Dados."
          alt="imagem do projeto"
          src={CRUDvueImage}
          header="Sistema de controle de usuários"
          githubLink="https://github.com/gustavohernandes11/usersControl"
          deployLink=""

        />
        <ProjectCard
          description=" Uma aplicação de bloco de notas para persistir anotações em um banco de dados. Possui sistema de login de usuários."
          alt="Imagem do projeto notepad"
          src={notepadImage}
          header="Notepad"
          githubLink="https://github.com/gustavohernandes11/notepad"
          deployLink=""
          
          />
        <ProjectCard
          description="Página que busca por perfis do github e retorna informações relevantes"
          alt="Imagem da página de buscas de perfis"
          src={notepadImage}
          header="Github profiles"
          githubLink="https://github.com/gustavohernandes11/searchProfilesGithub"
          deployLink=""
          />
          <ProjectCard
          description="Calculadora simples com React"
          alt="Imagem da calculadora"
          src={calculatorImage}
          header="Calculadora"
          githubLink="https://github.com/gustavohernandes11/calculator"
          deployLink=""
          />
          <ProjectCard
          description="Cronômetro feito em React Native"
          alt="Imagem do cronometro"
          src={notepadImage}
          header="Cronômetro"
          githubLink="https://github.com/gustavohernandes11/timerApp"
          deployLink=""
          />
          <ProjectCard
          description="Jogo criado com Reactjs"
          alt="Imagem do projeto jogo da velha"
          src={notepadImage}
          header="Jogo da memória"
          githubLink="https://github.com/gustavohernandes11/jogoDaMemoria"
          deployLink=""
          />
          
          </div>
    <p>Veja mais no github!</p>

      </Container>

      <Container color="#22202b" smooth>
        <div className="flexcolumn">
          <Box>
            <ContainerTitle color="blue" id="contato">Contato </ContainerTitle>
            <p>Me envie uma mensagem</p>
            <ContactForm />
          </Box>
        </div>

      </Container>
      <Footer></Footer>
    </App>
  )
}
