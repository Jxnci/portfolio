import React from 'react';

import styles from './footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className={styles.footer_logo}>Jxnci</a>
      <ul className={styles.permalinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
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