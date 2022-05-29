import React from 'react'
import Link from 'next/link'
import styles from '../styles/Main.module.css'

function Header() {
  return (
    <>
      <header id="#headerPage" className={styles.header}>
        <Link href="#sobre">
          <a >Sobre</a>
        </Link>
        <Link href="#tecnologias">
          <a >Tecnologias</a>
        </Link>
        <Link href="#projetos">
          <a >Projetos</a>
        </Link>
        <Link href="#footer">
          <a >Contato</a>
        </Link>

      </header>
    </>
  )
}

export default Header
