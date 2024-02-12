import React, { useState } from 'react';
import styles from './oscuro.module.css'
const Oscuro = () => {

  const [encendida, setEncendida] = useState(true);

  const r = document.querySelector(':root');//cambio de color

  const toggleLuz = () => {
    setEncendida((prevState) => !prevState);
    if (encendida === true) {
      r.style.setProperty('--color-primary', '#090828');
      r.style.setProperty('--color-bg', '#E7E4DE');
      r.style.setProperty('--color-strongs', 'darkblue');
      r.style.setProperty('--color-white', '#fff');
      r.style.setProperty('--fondo', 'radial-gradient(ellipse at top, #FFFFFF 0%, #EDEFF8 50%, #E9EDF5 100%);');
      document.body.style.background = "#fff";
    } else {
      r.style.setProperty('--color-primary', '#fff');
      r.style.setProperty('--color-bg', '#000');
      r.style.setProperty('--color-strongs', 'darkorange');
      r.style.setProperty('--color-white', '#fff');
      r.style.setProperty('--fondo-white', 'radial-gradient(ellipse at top, #222234 0%, #14141B 50%, #0A0A0A 100%)');
      document.body.style.color = "#ffffff";
      document.body.style.background = "#051626";
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.lampara}>
        <div className={styles.btn}>
          <label className={styles.switch}>
            <input type="checkbox" checked={encendida}
              onChange={toggleLuz} />
            <div className={`${styles.slider} ${styles.round}`}></div>
          </label>
        </div>
        <div className={styles.cable}></div>
        <div className={styles.caja}></div>
        <div className={encendida ? `${styles.luz} ${styles.l0}` : styles.luz}></div>
      </div>
    </div>
  );
}

export default Oscuro