import * as React from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {
    return (
        <>
        <div className={styles.contactform}>
            <input type="text" name="name" id="" placeholder="Nome" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="textarea" name="message" id="" placeholder="Digite sua mensagem" />
            <button>Enviar</button>
        </div>
        </>
    )
}