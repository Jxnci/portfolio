import React from 'react';

import styles from './about.module.css'
import ME from '../../assets/janci.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about' className={styles.sobre}>
      <h5>Algo más</h5>
      <h2>Sobre mí</h2>
      <div className={`${styles.about__container} ${'container'}`}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <img src={ME} alt="Janci Urdanivia" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experiencia</h5>
              <small>3+ Años trabajando</small>
            </article>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clientes</h5>
              <small>+ Por todo el mundo</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Proyectos</h5>
              <small>+ Completos</small>
            </article>
          </div>

          <p>
            Me siento muy motivado y con muchas ganas de seguir aprendiendo más sobre tecnología.  Completar mi formación académica adquiriendo conocimientos en contenidos digitales me ayudará mucho a desarrollar mi carrera profesional en el futuro.
            También he tenido la oportunidad de desarrollar mis primeras experiencias laborales a través de prácticas en diferentes empresas y en conjunto a compañeros universitarios. </p>
          <a href="#contact" className='btn btn-primary'> Let's Working</a>
        </div>
      </div>
    </section>
  )
}

export default About