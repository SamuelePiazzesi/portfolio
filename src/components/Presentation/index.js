import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const Presentation = () => {
  return (
    <div>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>Samuele Piazzesi</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' delay={500}>
        <h3>Full stack web developer based in Milan, currently working at Rewave</h3>
      </ScrollAnimation>
    </div>
  )
}

export default Presentation