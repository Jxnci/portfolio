import React from 'react';

import styles from './boton.module.css';


const boton = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.boton} href="https://www.linkedin.com/in/janci-urdanivia/" target='_blank' rel="noreferrer noopener">
        Disponible para trabajar!
      </a>
    </div>
  )
}

export default boton