import styles from './experience.module.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className={`${styles.experience__container} ${'container'}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            {Tec('HTML', 'Experienced')}
            {Tec('CSS', 'Intermediate')}
            {Tec('JavaScript', 'Experienced')}
            {Tec('Bootstrap', 'Experienced')}
            {Tec('React', 'Experienced')}
          </div>
        </div>
        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            {Tec('Node JS', 'Intermediate')}
            {Tec('SQL Server', 'Intermediate')}
            {Tec('PHP', 'Experienced')}
            {Tec('MySQL', 'Experienced')}
            {Tec('Java', 'Experienced')}
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