import * as React from 'react'
import styles from '../styles/Main.module.css'

const ContainerTitle = (props) => (
  <div className={styles.containertitle}>
  <p style={{color: props.color || 'orange', fontSize: '2rem', fontWeight: '700'}}># </p>
  <h1 id={props.id}> 
  {props.children}</h1>
  </div>
)

export default ContainerTitle