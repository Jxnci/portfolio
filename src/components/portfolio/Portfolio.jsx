import React, { useState } from 'react';

import styles from './portfolio.module.css'
import img1 from '../../assets/c1.png'
import img2 from '../../assets/c2.png'
import img3 from '../../assets/c3.png'
import img4 from '../../assets/c4.png'

import { FaVuejs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BiLogoJavascript } from "react-icons/bi";
import { DiPhp } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

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
        {Works(img1, 'CookApp', 'Sistema web para administrar la finanzas de emprendedores, con una API REST como backend.', ['LaravelAPI', 'Tailwind', 'Vue', 'MySql'])}
        {Works(img2, 'NET-UNASAM', 'Sistema Administrable e informativa, para el area de Noticias de la UNASAM.', ['Laravel', 'Tailwind', 'Blade', 'MySql', 'JavaScript'])}
        <div className={styles.portflio_boton_content}>
          <button className={styles.portfolio__boton} onClick={toggleVisible}>{visible ? "Ver menos" : "Ver mas"}</button>
        </div>
        <div className={visible ? styles.portfolio__container_content : styles.portfolio__container_content__edit}>
          {Works(img3, 'FatApp', 'Sistema web para realizar seguimiento de egresados de la facultad de Administracion y Turismo - UNASAM.', ['Tailwind', 'PhP', 'MySql', 'JavaScript'])}
          {Works(img4, 'Sistema POS', 'Contiene modulos de administracion de empleados, gestion de Ventas, cajas, Menus, Reportes, Control de asistencia, etc..', ['Bootstrap', 'JavaScript', 'jQuery', 'PhP', 'MySql'])}
        </div>
      </div>
    </section>
  )
}

function Works(img, titulo, description, tecnologias) {

  const iconos = {
    Bootstrap: <FaBootstrap />,
    JavaScript: <BiLogoJavascript />,
    jQuery: <DiJqueryLogo />,
    PhP: <DiPhp />,
    MySql: <GrMysql />,
    Vue: <FaVuejs />,
    Tailwind: <BiLogoTailwindCss />,
    Laravel: <FaLaravel />,
    LaravelAPI: <FaLaravel />
  };

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
            tecnologias.map(element => {
              const icono = iconos[element];
              if (icono) {
                return (
                  <div key={element} className={`${styles.pastilla} ${styles[element]}`}>
                    {icono}
                    <span> {element}</span>
                  </div>
                );
              }
              return null;
            })
          }
        </div>
      </div>
    </article>
  );
}

export default Portfolio
