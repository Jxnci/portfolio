import React, { useState } from 'react'

import '@fontsource-variable/onest';

import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => {

  const [mousePosition, setMousePosition] = useState({ x: 40, y: 40 });

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setMousePosition({ x, y });
  };

  const sizeDegradado = 550;

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120,119,198,0.2) 0%, transparent ${sizeDegradado}px)`
  };

  return (
    <div style={gradientStyle} onMouseMove={handleMouseMove}>
      <Header />
      <Nav />
      <Experience />
      <Portfolio />
      <About />
      <Footer />
    </div>
  )
}

export default App