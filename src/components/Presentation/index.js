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
      <ScrollAnimation animateIn='fadeIn' delay={1500}>
        <p>
           I'm a big fan of developing and learning new technologies. I can create and manage web applications, both frontend
          and backend, preferring the most popular frameworks and languages ​​and keeping myself constantly informed and updated.
        </p>
      </ScrollAnimation>
    </div>
  )
}

export default Presentation