import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'

export default function ProjectCard(props) {
    return (
        <>
            <div className={styles.projectcard}>
                <div className={styles.projectimage}>
                    <Image quality="100" src={props.src} alt={props.alt} height={200} width={420}  layout="responsive" />
                </div>
                <div className={styles.projectdescription}>
                    <b>{props.header}</b>
                    <p>{props.description}</p>
                    <nav className={styles.projectnav}>
                        {props.githubLink ? (<a href={props.githubLink}>Github</a>) : null}
                        {props.deployLink ? (<a href={props.deployLink}>Veja online!</a>) : null}

                    </nav>
                </div>
            </div>
        </>
    )
}