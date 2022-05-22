import * as React from 'react'
import styles from '../styles/ContactContainer.module.css'
import { faWhatsapp, faMailchimp} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ContactContainer() {
    return (
        <>
        <div className={styles.contactcontainer}>
            <span>
            <FontAwesomeIcon icon={faWhatsapp}/>
            <p>(17) 996560749</p>
            </span>
            <span>
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>gustavo.hernandes.s11@gmail.com</p>
            </span>
        </div>
        </>
    )
}