import React from 'react';

import styles from './portfolio.module.css'
import img1 from '../../assets/img.jpg'
import img2 from '../../assets/img1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`${styles.portfolio__container} ${'container'}`}>
        {Works(img1, 'Lorem ipsum dolor eum eveniet elit gaa!')}
        {Works(img2, 'Lorem ipsum dolor eum eveniet elit gaa!')}
        {Works(img1, 'Lorem ipsum dolor eum eveniet elit gaa!')}
        {Works(img2, 'Lorem ipsum dolor eum eveniet elit gaa!')}
        {Works(img1, 'Lorem ipsum dolor eum eveniet elit gaa!')}
        {Works(img2, 'Lorem ipsum dolor eum eveniet elit gaa!')}
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
        <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel="noreferrer noopener"> Demo Live</a>
      </div>
    </article>
  );
}

export default Portfolio