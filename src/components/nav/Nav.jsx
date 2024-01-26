import React from 'react';

import styles from './Nav.module.css';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { MdOutlineWeb } from 'react-icons/md'

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  let active = styles.active;
  return (
    <nav>
      <a href="#inicio"
        onClick={() => setActiveNav('#inicio')}
        className={activeNav === '#inicio' ? active : ''}>
        <AiOutlineHome /></a>
      <a href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? active : ''}
      ><BiBook /></a>
      <a href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? active : ''}
      ><MdOutlineWeb /></a>
      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? active : ''}
      ><AiOutlineUser /></a>
    </nav>
  )
}

export default Nav