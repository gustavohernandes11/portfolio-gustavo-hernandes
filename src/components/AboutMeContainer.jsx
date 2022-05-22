import * as React from 'react'
import styles from '../styles/AboutMe.module.css'

const AboutMeContainer = (props) => (      
<div className={styles.aboutmecontainer}>
          <div className={styles.aboutmedescription}>
            <p>Meu nome é <b>Gustavo Hernandes da Silva</b>, tenho 19 anos e sou do estado de São Paulo. Possuo um grande interesse pela programação e por conta disso que há um ano
            comecei a me aprofundar em conhecimentos de desenvolvimento web, tal como HTML, CSS e <b>Javascript</b>. E posteriormente avançando para Frameworks, 
            bibliotecas, otimizações de código, SEO, entre outros conceitos essenciais.</p>
            <p>Apesar do foco no <b>FrontEnd</b>, pretendo ter um conhecimento avançado fullstack.</p>
            <p>Meu objetivo atualmente é poder demonstrar, em um meio profissional, os conhecimentos que tenho adquirido. Caso precise de ajuda em algum projeto, pode entrar em contato comigo.</p>

          </div>
          <div className={styles.aboutmeimage}>
          <img src="https://github.com/gustavohernandes11.png" alt="Avatar"  />
          </div>
</div>
      
)

export default AboutMeContainer



