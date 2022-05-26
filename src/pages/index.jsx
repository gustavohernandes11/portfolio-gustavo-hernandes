
import App from '../components/App'
import Container from '../components/Container'
import ContainerTitle from '../components/ContainerTitle'
import Box from '../components/Box'
import SocialBar from '../components/SocialBar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactContainer'
import ProjectCard from '../components/ProjectCard'
import AboutMeContainer from '../components/AboutMeContainer'
import TecnologyCard from '../components/TecnologyCard'


import CRUDvueImage from '../assets/imgs/CRUDvue1.png'
import notepadImage from '../assets/imgs/notepadHome.png'
import calculatorImage from '../assets/imgs/calculadora.png'


export default function Home() {

  return (
    <App>

      <Container full main>
        <h1>Gustavo Hernandes</h1>
        <p>Desenvolvedor Web</p>
        <SocialBar />
        <a href="#sobre"><button>Saiba mais</button></a>
      </Container>
      <Container className="flexrow" full color="#131313">
        <ContainerTitle id="sobre">Sobre</ContainerTitle>

        <AboutMeContainer />
      </Container>

      <Container full color="#1b1b1b">
        <ContainerTitle color="purple" id="tecnologias">Tecnologias </ContainerTitle>
        <p>Linguagens e ferramentas comumente utilizadas em projetos</p>
        <div className="techcontainer">
          <div >
            <h2>FrontEnd</h2>
            <TecnologyCard content="Javascript/Typescript" />
            <TecnologyCard content="HTML/CSS" />
            <TecnologyCard content="Reactjs e seu ecossistema" />
            <TecnologyCard content="Vue e seu ecossistema" />
            <TecnologyCard content="Bootstrap" />
          </div>
          <div >
            <h2>BackEnd</h2>
            <TecnologyCard content="Nodejs" />
            <TecnologyCard content="Firebase" />
            <TecnologyCard content="Express" />
          </div>
          <div >
            <h2>Banco de dados</h2>
            <TecnologyCard content="Knex" />
            <TecnologyCard content="Postgresql" />
            <TecnologyCard content="Mongodb" />
          </div>
          <div >
            <h2>Controle e criação</h2>
            <TecnologyCard content="Git" />
            <TecnologyCard content="Github" />
            <TecnologyCard content="Figma" />
          </div>
        </div>

      </Container>
      <Container full color="#22202b" >
        <ContainerTitle id="projetos" color="crimson">Projetos </ContainerTitle>
        <div className="flexrow">

          <ProjectCard
            description="Sistema de cadastro de usuários com leitura, alteração, remoção e inserção de informações num Banco de Dados."
            alt="imagem do projeto"
            src={CRUDvueImage}
            header="Controle de usuários"
            githubLink="https://github.com/gustavohernandes11/usersControl"
            deployLink=""

          />
          <ProjectCard
            description="Página que busca por perfis do github e retorna informações relevantes"
            alt="Imagem da página de buscas de perfis"
            src={null}
            header="Github profiles"
            githubLink="https://github.com/gustavohernandes11/search-github-profiles"
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
            description="Calculadora simples com React"
            alt="Imagem da calculadora"
            src={calculatorImage}
            header="Calculadora"
            githubLink="https://github.com/gustavohernandes11/calculator"
            deployLink="https://calculadora11.netlify.app/"
          />
          <ProjectCard
            description="Cronômetro feito em React Native"
            alt="Imagem do cronometro"
            header="Cronômetro"
            src={null}
            githubLink="https://github.com/gustavohernandes11/timerApp"
            deployLink=""
          />
          <ProjectCard
            description="Jogo criado com Reactjs"
            alt="Imagem do projeto jogo da velha"
            header="Jogo da memória"
            src={null}
            githubLink="https://github.com/gustavohernandes11/jogoDaMemoria"
            deployLink=""
          />

        </div>

      </Container>
      <Footer>
        <span>
          <b>Entre em contato:</b>
        <ContactForm />
        </span>
        <p>
          Atribuição:
        </p>
        <p>
           <a href='https://br.freepik.com/fotos-vetores-gratis/noite'>Noite foto criado por wirestock - br.freepik.com</a>
        </p>
      </Footer>
    </App>
  )
}
