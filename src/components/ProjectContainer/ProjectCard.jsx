import * as React from 'react'
import Image from 'next/image'
import styles from '../../styles/ProjectContainer.module.css'

export default function ProjectCard(props) {
    return (
        <>
            <div className={styles.projectcard} >
                {props.src ? (<div className={styles.projectimage}>
                    <Image quality="50" src={props.src} alt={props.alt} height={200} width={420} layout="responsive" />
                </div>) : (null)}
                <div className={styles.projectdescription}>
                    <b>{props.header}</b>
                    <p>{props.description}</p>
                    <nav className={styles.projectnav}>
                        {props.githubLink ? (<a href={props.githubLink}><button>Github</button></a>) : null}
                        {props.deployLink ? (<a href={props.deployLink}><button>Veja online!</button></a>) : null}

                    </nav>
                </div>
            </div>
        </>
    )
}