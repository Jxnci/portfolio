import React, { useState } from 'react';

import styles from './portfolio.module.css'
import img1 from '../../assets/img.jpg'
import img2 from '../../assets/img1.jpg'

import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prevState) => !prevState);
  };


  return (
    <section id='portfolio'>
      <h5 className={styles.titulo}>Mis trabajos recientes</h5>
      <h2>Proyectos</h2>
      <div className={`${styles.portfolio__container} ${'container'}`}>
        {Works(img1, 'CookApp', 'Sistema web para administrar la finanzas de emprendedores, con una API REST como backend.', ['Laravel API', 'Tailwind','Vue','MySql'])}
        {Works(img2, 'RTV-UNASAM', 'Sistema Administrable e informativa, para el area de Noticias de la UNASAM.', ['Laravel', 'Tailwind','Blade','MySql','JavaScript'])}
        <div className={styles.portflio_boton_content}>
          <button className={styles.portfolio__boton} onClick={toggleVisible}>Ver mas </button>
        </div>
        <div className={visible ? styles.portfolio__container_content : styles.portfolio__container_content__edit}>
          {Works(img1, 'FatApp', 'Sistema web para realizar seguimiento de egresados de la facultad de Administracion y Turismo - UNASAM.', ['Tailwind','PhP','MySql','JavaScript'])}
          {Works(img1, 'Sistema POS', 'Contiene modulos de administracion de empleados, gestion de Ventas, cajas, Menus, Reportes, Control de asistencia, etc..', ['Bootstrap','JavaScript','jQuery','PhP','MySql'])}
        </div>
      </div>
    </section>
  )
}

function Works(img, titulo, description, tecnologias) {
  return (
    <article className={styles.portfolio__item}>
      <div className={styles.portfolio__item_image}>
        <img src={img} alt="project" />
      </div>
      <div className={styles.portfolio__item_content}>
        <div className={styles.portfolio__titulo}>
          <h3>{titulo}</h3>
          <div className={styles.portfolio__item_cta}>
            <a href="https://github.com/jxnci" className='btn' target='_blank' rel="noreferrer noopener"><FaGithub /></a>
            <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Visitar <BsBoxArrowInUpRight /></a>
          </div>
        </div>
        <p className={styles.portfolio__item_description}>{description}</p>
        <div className={styles.techs}>
          {
            tecnologias.map(element => (
              <div key={element} className={styles.pastilla}>{element}</div>
            ))
          }
        </div>
      </div>
    </article>
  );
}

export default Portfolio
