import * as React from 'react'
import styles from '../styles/SocialBar.module.css'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const SocialBar = (props) => (
  <div className={styles.socialbar}>
      <a href="https://github.com/gustavohernandes11"><FontAwesomeIcon icon={faGithub}/></a>
      <a href="https://web.facebook.com/profile.php?id=100013794438299"><FontAwesomeIcon icon={faFacebook}/></a>
      <a href="https://www.linkedin.com/in/gustavo-hernandes-7171a91b0/"><FontAwesomeIcon icon={faLinkedin}/></a>

  </div>
)

export default SocialBar
