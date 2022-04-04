import CV from '../../assets/CV.pdf';
import styles from './Header.module.css';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className="btn">Dowloand CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA