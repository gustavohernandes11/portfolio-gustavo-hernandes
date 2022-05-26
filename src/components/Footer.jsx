import * as React from 'react'
import styles from '../styles/Footer.module.css'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = (props) => (
  <footer id="footer" className={styles.footer}>
    {props.children}
    <button className={styles.goHomeButton} id="goHomeButton"

      onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}

    >      <a href="/"><FontAwesomeIcon  icon={faArrowUpLong} /></a>
    </button>
  </footer>
)

export default Footer
