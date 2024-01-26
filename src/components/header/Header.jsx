import React from 'react';

import styles from './Header.module.css';
import CTA from './Cta';
import Boton from './Boton.jsx';

import Oscuro from '../oscuro/Oscuro.jsx';

const Header = () => {

  return (
    <header id='inicio'>
      <div className={`${styles.header__container} ${'container'}`}>
        <div className={styles.fondo}></div>
        <div className={styles.header_content}>
          <div className={styles.names}>
            <Boton />
            <h1>Janci Urdanivia Coral</h1>
            <h5>+3 años de experiencia. <span> Desarrollador Web y de escritorio</span> . <span>De Ancash, Perú.</span> <span>Especializado en crear aplicaciones únicas.</span></h5>
            <CTA />
          </div>
        </div>
        <div className={styles.scroll__down}>
          <Oscuro />
        </div>
        <div className={styles.part1}></div>
        <div className={styles.part2}></div>
        <div className={styles.part3}></div>
      </div>
    </header>
  )
}

export default Header