import * as React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = (props) => (
  <footer className={styles.footer}>
      { props.children }
  </footer>
)

export default Footer
