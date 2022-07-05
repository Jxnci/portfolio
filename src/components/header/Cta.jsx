import React from 'react';

import CV from '../../assets/CV.pdf';
import styles from './Header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className="btn">Descargar CV</a>
      <a href="#contact" className="btn btn-primary">Hablemos!</a>
    </div>
  )
}

export default CTA