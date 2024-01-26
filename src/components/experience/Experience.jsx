import React from 'react';

import styles from './experience.module.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className={styles.titulo}>¿Que habilidades tengo?</h5>
      <h2>Mi Experiencia</h2>
      <div className={`${styles.experience__container} ${'container'}`}>
        <div className={styles.experience__frontend}>
          <h3>Desarrollo front-end</h3>
          <div className={styles.experience__content}>
            {Tec('HTML', 'Experimentado')}
            {Tec('CSS', 'Experimentado')}
            {Tec('TailWind', 'Experimentado')}
            {Tec('Bootstrap', 'Experimentado')}
            {Tec('JavaScript', 'Experimentado')}
            {Tec('React', 'Intermedio')}
            {Tec('Vue', 'Intermedio')}
            {Tec('jQuery', 'Experimentado')}
          </div>
        </div>
        <div className={styles.experience__backend}>
          <h3>Desarrollo de back-end</h3>
          <div className={styles.experience__content}>
            {Tec('SQL Server', 'Intermedio')}
            {Tec('MySQL', 'Experimentado')}
            {Tec('NodeJS', 'Básico')}
            {Tec('PHP', 'Experimentado')}
            {Tec('Laravel', 'Basico')}
            {Tec('Python', 'Intermedio')}
            {Tec('DJango', 'Basico')}
            {Tec('Java', 'Experimentado')}
          </div>
        </div>
      </div>
    </section>
  )
}

function Tec(name, desc) {
  return (
    <div className={styles.experience__details}>
      <BsPatchCheckFill className={styles.experience__details_icon}/>
      <div>
        <h4>{name}</h4>
        <small className={'text-light'}>{desc}</small>
      </div>
    </div>
  );
}
export default Experience