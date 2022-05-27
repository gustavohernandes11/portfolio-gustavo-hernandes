import React from 'react';
import ProjectCard from './ProjectCard'
import styles from '../../styles/ProjectContainer.module.css'
import ContainerTitle from '../ContainerTitle.jsx'

import CRUDvueImage from '../../assets/imgs/CRUDvue1.png'
import searchGithubProfilesImage from '../../assets/imgs/search-github-profiles.png'
import notepadImage from '../../assets/imgs/notepadHome.png'
import calculatorImage from '../../assets/imgs/calculadora.png'

const ProjectContainer = () => {
    return (
        <div className={styles.projectcontainer}  >
            <ContainerTitle id="projetos" color="crimson">Projetos </ContainerTitle>
            <div className="flexrow">

                <ProjectCard
                    description="Sistema de cadastro de usuários com leitura, alteração, remoção e inserção de informações num Banco de Dados."
                    alt="Imagem do projeto cadastro de usuários"
                    src={CRUDvueImage}
                    header="Controle de usuários"
                    githubLink="https://github.com/gustavohernandes11/usersControl"
                    deployLink=""

                />
                <ProjectCard
                    description="Página que busca por perfis do github e retorna informações relevantes"
                    alt="Imagem da página de buscas de perfis"
                    src={searchGithubProfilesImage}
                    header="Github profiles"
                    githubLink="https://github.com/gustavohernandes11/search-github-profiles"
                    deployLink="https://searchprofilesgithub.netlify.app"
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
                    alt="Imagem do projeto cronometro"
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

        </div>
    );
}

export default ProjectContainer;
