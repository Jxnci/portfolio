import React from 'react';

import styles from './portfolio.module.css'
import img1 from '../../assets/img.jpg'
import img2 from '../../assets/img1.jpg'

import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className={styles.titulo}>Mis trabajos recientes</h5>
      <h2>Proyectos</h2>
      <div className={`${styles.portfolio__container} ${'container'}`}>
        {Works(img1, 'Titulo del proyecto', 'Breve descripción del proyecto online.')}
        {Works(img2, 'Titulo del proyecto', 'Breve descripción del proyecto online.')}
        {Works(img1, 'Titulo del proyecto', 'Breve descripción del proyecto online.')}
      </div>
    </section>
  )
}

function Works(img, titulo, description) {
  return (
    <article className={styles.portfolio__item}>
      <div className={styles.portfolio__item_image}>
        <img src={img} alt="project" />
      </div>
      <h3>{titulo}</h3>
      <p className={styles.portfolio__item_description}>{description}</p>
      <div className={styles.portfolio__item_cta}>
        <a href="https://github.com/jxnci" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
        <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Ver <BsBoxArrowInUpRight /></a>
      </div>
    </article>
  );
}

export default Portfolio