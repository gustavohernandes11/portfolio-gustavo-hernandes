import * as React from 'react'
import Link from 'next/link'
import styles from '../styles/Main.module.css'

const Header = ({ pathname }) => (
  <header className={styles.header}>
    <Link href="#sobre">
      <a className={pathname === '/' ? 'is-active' : ''}>Sobre</a>
    </Link>
    <Link href="#tecnologias">
      <a className={pathname === '/' ? 'is-active' : ''}>Tecnologias</a>
    </Link>
    <Link href="#projetos">
      <a className={pathname === '/' ? 'is-active' : ''}>Projetos</a>
    </Link>
    <Link href="#contato">
      <a className={pathname === '/' ? 'is-active' : ''}>Contato</a>
    </Link>

  </header>
)

export default Header
