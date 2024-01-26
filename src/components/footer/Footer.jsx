import React from 'react';

import styles from './footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();

  return (
    <footer>
      <div className={styles.footer__copyright}>
        <small>Hecho por Janci con ❤ - {anio}</small>
      </div>
      <div className={styles.footer__socials}>
        <a href="https://facebook.com/janci16" target='_blank' rel="noreferrer noopener"><FaFacebook /></a>
        <a href="https://www.instagram.com/janci_u15/" target='_blank' rel="noreferrer noopener"><FiInstagram /></a>
        <a href="https://twitter.com/janci_urdanivia" target='_blank' rel="noreferrer noopener"><IoLogoTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer