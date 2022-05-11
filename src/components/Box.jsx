import * as React from 'react'
import styles from '../styles/Box.module.css'

export default function Box(props) {
    return (
        <div className={styles.box}>
            { props.children }
        </div>
    )
}