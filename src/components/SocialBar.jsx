import * as React from 'react'
import styles from '../styles/SocialBar.module.css'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const SocialBar = (props) => (
  <div className={styles.socialbar}>
      <a href="/"><FontAwesomeIcon icon={faGithub}/></a>
      <a href="/"><FontAwesomeIcon icon={faFacebook}/></a>
      <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>

  </div>
)

export default SocialBar
