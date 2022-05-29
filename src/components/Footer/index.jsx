import * as React from 'react'
import styles from '../../styles/Footer.module.css'
import GoHomeButton from './GoHomeButton'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <footer id="footer" className={styles.footer}>
            <b>Entre em contato:</b>
        <span>
            <span >
                <FontAwesomeIcon icon={faWhatsapp} />
                <a href="http://api.whatsapp.com/send?1=pt_BR&phone=55017996560749"><p>(17) 996560749</p></a>
            </span>
            <span>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>gustavo.hernandes.s11@gmail.com</p>
            </span>

        </span>
        <span>
        <p>
            Atribuição:
        </p>
        <p>
            <a href='https://br.freepik.com/fotos-vetores-gratis/noite'>Noite foto criado por wirestock - br.freepik.com</a>
        </p>
        </span>
        <GoHomeButton />
    </footer>
)

export default Footer
