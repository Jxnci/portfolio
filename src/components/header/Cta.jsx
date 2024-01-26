import React from 'react';

import CV from '../../assets/CV.pdf';
import styles from './Header.module.css';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaRegFileAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href="https://www.linkedin.com/in/janci-urdanivia/" target='_blank' rel="noreferrer noopener" className={styles.refs}><BsLinkedin />
        <span>Linkedin</span>
      </a>
      <a href="https://github.com/Jxnci" target='_blank' rel="noreferrer noopener" className={styles.refs}>
        <FaGithub /><span>Github</span>
      </a>
      <a href={CV} download className={styles.refs}><FaRegFileAlt /><span>CV</span></a>
    </div>
  )
}

export default CTA