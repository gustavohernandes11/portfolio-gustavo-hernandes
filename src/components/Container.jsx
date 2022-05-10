import styles from '../styles/Main.module.css'

export default function Container(props){
    return (
        <div style={{ backgroundColor: props.color || '#313036' }}
         className={`
        ${styles.container}
        ${props.main ? styles.maincontainer : false}
        ${props.full ? styles.full : false}
        ${props.smooth ? styles.smooth : false}
         `}>
            {props.children}
        </div>
    )
}