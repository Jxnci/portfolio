import React from 'react';

import styles from './fondo.module.css';

const Fondo = ({ children }) => {
  return (
    <div id='fond' className={`${styles.absolute} ${styles.h_full} ${styles.w_full} ${styles.items_center} ${styles.px_5} ${styles.py_24} ${styles.background}`}>{ children }
    </div>
  )
}

export default Fondo