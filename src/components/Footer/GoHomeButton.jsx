import React from 'react';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/Footer.module.css'


const GoHomeButton = () => {
    return (
        <button className={styles.goHomeButton} id="goHomeButton"

            onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })}

        >      <a href="/"><FontAwesomeIcon icon={faArrowUpLong} /></a>
        </button>
    );
}

export default GoHomeButton;
