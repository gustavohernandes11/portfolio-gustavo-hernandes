import * as React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = (props) => (
  <footer className={styles.footer}>
    {props.children}
    <button className={styles.goHomeButton} id="goHomeButton"

      onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}

    >/\</button>
  </footer>
)

export default Footer
