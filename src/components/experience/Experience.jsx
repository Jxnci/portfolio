import React, { useState } from 'react';
import styles from './experience.module.css'
import { FaInfoCircle } from "react-icons/fa";

const Experience = () => {

  const [flippedCards, setFlippedCards] = useState({});

  const handleContainerClick = (cardId) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [cardId]: !prevFlippedCards[cardId],
    }));
  };
  return (
    <section id='experience' className={styles.fondo}>
      <h5 className={styles.titulo}>Ultimos trabajos</h5>
      <h2>Mi Experiencia</h2>
      <div className={`${styles.experience__container} ${'container'}`}>

        <div className={styles.container} onClick={() => handleContainerClick('card1')}>
          <div className={styles.card + " " + (flippedCards['card1'] ? styles.flipped : '')}>
            <div className={styles.front}>
              <h2>Desarrollador frontend</h2>
              <h3>Fidelo - Freelancer</h3>
              <h4>Diciembre 2023 - Actualidad</h4>
              <button className={styles.boton}><FaInfoCircle /></button>
            </div>
            <div className={styles.back}>
              <h3>Descripcion</h3>
              <p>
                Diseño y construccion de diferentes modulos de la apliacion web en el area frontend usando VueJs, JWT, Postman
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container} onClick={() => handleContainerClick('card2')}>
          <div className={styles.card + " " + (flippedCards['card2'] ? styles.flipped : '')}>
            <div className={styles.front}>
              <h2>Desarrollador fullstack </h2>
              <h3>Universidad Santiago Antunez de Mayolo</h3>
              <h4>Diciembre 2023</h4>
              <button className={styles.boton}><FaInfoCircle /></button>
            </div>
            <div className={styles.back}>
              <h3>Descripcion</h3>
              <p>
                Desarrollo e implementacion de una herramienta informatica para agilizar los tramites de la direccion de grados y titulo de la cafultad de administracion y turismo de la UNASAM.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container} onClick={() => handleContainerClick('card4')}>
          <div className={styles.card + " " + (flippedCards['card4'] ? styles.flipped : '')}>
            <div className={styles.front}>
              <h2>Practicante de Ing. de Sistemas</h2>
              <h3>Universidad Santiago Antunez de Mayolo</h3>
              <h4>Julio - Noviembre 2023</h4>
              <button className={styles.boton}><FaInfoCircle /></button>
            </div>
            <div className={styles.back}>
              <h3>Descripcion</h3>
              <p>
                Implemente un portal administrable de noticias para la universidad, use el framework Laravel. Además apoye en el mantenimiento y solución de fallas de sistemas ya instalados
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container} onClick={() => handleContainerClick('card3')}>
          <div className={styles.card + " " + (flippedCards['card3'] ? styles.flipped : '')}>
            <div className={styles.front}>
              <h2>Desarrollador de software </h2>
              <h3>Municipalidad de Yanama - Ancash</h3>
              <h4>Noviembre - Enero 2022</h4>
              <button className={styles.boton}><FaInfoCircle /></button>
            </div>
            <div className={styles.back}>
              <h3>Descripcion</h3>
              <p>
                Desarrolle un sistema de consulta virtual de actas para mas de 5 mil usuarios. Utilice html, css, jquery, js y php para el desarrollo, y despliegue de l proyecto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience