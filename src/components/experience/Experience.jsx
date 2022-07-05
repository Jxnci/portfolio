import React from 'react';

import styles from './experience.module.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>¿Que habilidades tengo?</h5>
      <h2>Mi Experiencia</h2>
      <div className={`${styles.experience__container} ${'container'}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            {Tec('HTML', 'Experimentado')}
            {Tec('CSS', 'Experimentado')}
            {Tec('JavaScript', 'Experimentado')}
            {Tec('Bootstrap', 'Experimentado')}
            {Tec('React', 'Intermedio')}
          </div>
        </div>
        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            {Tec('Node JS', 'Básico')}
            {Tec('SQL Server', 'Intermedio')}
            {Tec('PHP', 'Experimentado')}
            {Tec('MySQL', 'Experimentado')}
            {Tec('Java', 'Experimentado')}
          </div>
        </div>
      </div>
    </section>
  )
}

function Tec(name, desc) {
  return (
    <article className={styles.experience__details}>
      <BsPatchCheckFill className={styles.experience__details_icon}/>
      <div>
        <h4>{name}</h4>
        <small className={'text-light'}>{desc}</small>
      </div>
    </article>
  )
}
export default Experience