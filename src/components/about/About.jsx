import styles from './about.module.css'
import ME from '../../assets/janci.jpg'

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
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
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>200+ Wolrdwide</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>80+ Complete</small>
            </article>
          </div>

          <p>
            I feel very motivated and eager to learn more about technology. I think that completing my academic training by acquiring knowledge in digital content will help me a lot to develop my professional career in the future.
            I have also had the opportunity to develop my first work experiences through internships in different companies and university classmates.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Working</a>
        </div>
      </div>
    </section>
  )
}

export default About