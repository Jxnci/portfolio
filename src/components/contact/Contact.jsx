import React from 'react';

import styles from './contact.module.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_4g7fwh7', 'template_yat480j', form.current, 'B4to2ang6Fs4v7sgf');
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Contáctame</h2>
      <div className={`${styles.contact__container} ${'container'}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option_icon} />
            <h4>Correo Electrónico</h4>
            <a href="mailto:urdanivia99@gmail.com" >Enviar un mensaje</a>
          </article>
          <article className={styles.contact__option}>
            <RiMessengerLine className={styles.contact__option_icon} />
            <h4>Messenger</h4>
            <a href="https:m.me/janci16" target="_blank" rel="noreferrer noopener">Enviar un mensaje</a>
          </article>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles.contact__option_icon} />
            <h4>WhastApp</h4>
            <a href="https://api.whatsapp.com/send?phone=934680481" target="_blank" rel="noreferrer noopener">Enviar un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Tu nombre completo' required />
          <input type="email" name="email" placeholder='Tu correo electrónico' required />
          <textarea name="message" rows="7" placeholder='Escribe tu mensaje!' required></textarea>
          <button type='submit' className='btn btn-primary'> Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact