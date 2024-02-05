import React from 'react';

import styles from './about.module.css'
import ME from '../../assets/janci.jpg'

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
          <p>
            ¡Hola! Soy Janci Urdanivia. Mi viaje en la programación comenzó desde joven, <strong>explorando el mundo tecnológico con una curiosidad incesante.</strong>
          </p><p>
            Criado entre los hermosos paisajes de Huaraz, <strong>siempre he sentido una conexión con la naturaleza y los animales</strong>, y busco constantemente formas de fusionar este amor con mi pasión por la tecnología.
          </p><p>
            Graduado en Computacion e informatica, <strong>actualmente estoy cursando ingenieria de sistemas</strong>, buscando expandir mis conocimientos y habilidades en el campo. </p>
        </div>
      </div>
    </section>
  )
}

export default About