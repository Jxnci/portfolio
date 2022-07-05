import React from 'react';

import styles from './portfolio.module.css'
import img1 from '../../assets/img.jpg'
import img2 from '../../assets/img1.jpg'

import {BsBoxArrowInUpRight} from 'react-icons/bs';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className={`${styles.portfolio__container} ${'container'}`}>
        {Works(img1, 'Breve descripción del proyecto online.')}
        {Works(img2, 'Breve descripción del proyecto online.')}
        {Works(img1, 'Breve descripción del proyecto online.')}
        {Works(img2, 'Breve descripción del proyecto online.')}
        {Works(img1, 'Breve descripción del proyecto online.')}
        {Works(img2, 'Breve descripción del proyecto online.')}
      </div>
    </section>
  )
}

function Works(img, description) {
  return (
    <article className={styles.portfolio__item}>
      <div className={styles.portfolio__item_image}>
        <img src={img} alt="project" />
      </div>
      <h3>{description}</h3>
      <div className={styles.portfolio__item_cta}>
        <a href="https://github.com/jxnci" className='btn' target='_blank' rel="noreferrer noopener">Github</a>
        <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Ver <BsBoxArrowInUpRight/></a>
      </div>
    </article>
  );
}

export default Portfolio