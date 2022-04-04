import React from 'react';
import styles from './Header.module.css';
import CTA from './Cta';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

import { useState } from 'react';

const Header = () => {

  const [activeColor, setactiveColor] = useState('default');
  let active = styles.active;
  const r = document.querySelector(':root');//cambio de color
  document.body.style.transition = "all .3s ease-in-out";//transicion de color

  if (activeColor === 'dark') {
    document.body.style.backgroundColor = "#192734";
    r.style.setProperty('--color-primary', '#fff');
    r.style.setProperty('--color-bg', '#000');
    r.style.setProperty('--color-white', '#fff');
    document.body.style.color = "#ffffff";
  } else if (activeColor === 'green') {
    document.body.style.backgroundColor = "#78866B";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#E7E4DE";
    r.style.setProperty('--color-primary', '#BD2631');
    r.style.setProperty('--color-bg', '#E7E4DE');
    r.style.setProperty('--color-white', '#fff');
  }

  return (
    <header>
      <div className={`${styles.header__container} ${'container'}`}>
        <div className={styles.header_content}>
          <div className={styles.s}>
            <h5>Hello I'm</h5>
            <h1>Janci Urdanivia</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <div className={styles.header__scroll}>
              <a href="#contact" >Scroll Down</a>
            </div>
          </div>
          <div className={styles.me}>
            <img src={ME} alt="Janci Urdanivia" />
          </div>
        </div>
        <HeaderSocials />
        <div className={styles.scroll__down}>
          <a onClick={() => setactiveColor('default')}
            className={`${activeColor === 'default' ? active : ''} ${styles.default}`}></a>
          <a onClick={() => setactiveColor('dark')}
            className={`${activeColor === 'dark' ? active : ''} ${styles.dark}`}></a>
          <a onClick={() => setactiveColor('green')}
            className={`${activeColor === 'green' ? active : ''} ${styles.green}`}></a>
        </div>
      </div>
    </header>
  )
}

export default Header