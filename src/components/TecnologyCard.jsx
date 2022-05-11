import * as React from 'react'
import styles from '../styles/TecnologyCard.module.css'

export default function TecnologyCard(props) {
    return (
        <>
        <div className={styles.tecnologycard}>
            {props.icon ? (props.icon) : ''}
            <p className={styles.tecnologycontent}>{props.content}</p>
        </div>
        </>
    )
}