import * as React from 'react'
import styles from '../../styles/TechContainer.module.css'

export default function TecnologyCard(props) {
    return (
        <>
            <div className={styles.tecnologycard}>
                <p className={styles.tecnologyicon}>{props.icon ? (props.icon) : ''}</p>
                <p className={styles.tecnologycontent}> {props.content}</p>
            </div>
        </>
    )
}