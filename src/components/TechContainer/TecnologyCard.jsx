import * as React from 'react'
import styles from '../../styles/TechContainer.module.css'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TecnologyCard(props) {
    return (
        <>
            <div className={styles.tecnologycard}>
                <p className={styles.tecnologyicon}>{props.icon ? (props.icon) : (<FontAwesomeIcon icon={faCode}/>)}</p>
                <p className={styles.tecnologycontent}> {props.content}</p>
            </div>
        </>
    )
}