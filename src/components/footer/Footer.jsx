import React from 'react';

import styles from './footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <ul className={styles.permalinks}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#service">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#Testimoniall">Comentarios</a></li>
        <li><a href="#contact">Cantacto</a></li>
      </ul>
      <div className={styles.footer__socials}>
        <a href="https://facebook.com/janci16" target='_blank' rel="noreferrer noopener"><FaFacebook /></a>
        <a href="https://www.instagram.com/janci_u15/" target='_blank' rel="noreferrer noopener"><FiInstagram /></a>
        <a href="https://twitter.com/janci_urdanivia" target='_blank' rel="noreferrer noopener"><IoLogoTwitter /></a>
      </div>
      <div className={styles.footer__copyright}>
        <small>&copy; Janci - 2022</small>
      </div>
    </footer>
  )
}

export default Footer