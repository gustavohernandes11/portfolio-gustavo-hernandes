import React from 'react';
import TecnologyCard from './TecnologyCard'
import ContainerTitle from '../ContainerTitle'
import styles from '../../styles/TechContainer.module.css'
import { faJsSquare, faHtml5, faReact, faVuejs, faBootstrap, faNodeJs, faGitSquare, faFigma, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TechContainer = () => {
    return (
        <div className={styles.techcontainer} full color="#1b1b1b">
            <ContainerTitle color="purple" id="tecnologias">Tecnologias </ContainerTitle>
            <p>Linguagens e ferramentas comumente utilizadas em projetos</p>
            <div className="techcontainer">
                <div className={styles.techcolumn} >
                    <h2>FrontEnd</h2>
                    <TecnologyCard content="Javascript/Typescript" icon={<FontAwesomeIcon icon={faJsSquare}/>} />
                    <TecnologyCard content="HTML/CSS" icon={<FontAwesomeIcon icon={faHtml5}/>}/>
                    <TecnologyCard content="React" icon={<FontAwesomeIcon icon={faReact}/>} />
                    <TecnologyCard content="Vue"  icon={<FontAwesomeIcon icon={faVuejs}/>}/>
                    <TecnologyCard content="Bootstrap"  icon={<FontAwesomeIcon icon={faBootstrap}/>}/>
                </div>
                <div className={styles.techcolumn} >
                    <h2>BackEnd</h2>
                    <TecnologyCard content="Nodejs" icon={<FontAwesomeIcon icon={faNodeJs}/>}/>
                    <TecnologyCard content="GraphQl"/>
                    <TecnologyCard content="Express"/>
                    <TecnologyCard content="Knex"/>
                </div>
                <div className={styles.techcolumn}>
                    <h2>Banco de dados</h2>
                    <TecnologyCard content="Postgresql"/>
                    <TecnologyCard content="Mongodb"/>
                </div>
                <div className={styles.techcolumn}>
                    <h2>Controle e criação</h2>
                    <TecnologyCard content="Git"  icon={<FontAwesomeIcon icon={faGitSquare}/>}/>
                    <TecnologyCard content="Github"  icon={<FontAwesomeIcon icon={faGithubSquare}/>}/>
                    <TecnologyCard content="Figma"  icon={<FontAwesomeIcon icon={faFigma}/>}/>
                </div>
            </div>

        </div>
    );
}

export default TechContainer;
