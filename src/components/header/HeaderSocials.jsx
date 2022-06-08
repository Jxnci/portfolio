import React from 'react';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import styles from './Header.module.css'

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      <a href="https://www.linkedin.com/in/janci-urdanivia-b81616152/" target='_blank' rel="noreferrer noopener"><BsLinkedin/></a>
      <a href="https://github.com/Jxnci" target='_blank' rel="noreferrer noopener"><FaGithub/></a>
      <a href="https://www.youtube.com/channel/UC8Ky8zIUjo2-p2Waq_hMkog" target='_blank' rel="noreferrer noopener"><BsYoutube/></a>
    </div>
  );
}

export default HeaderSocials