import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Ufo from "../primitives/Toy/Ufo"
import svg from "../../images/navicella-02.svg"
import { Timeline, Tween } from "react-gsap"


const Presentation = () => {
  return (
    <div id={'presentation'}>
      <Timeline
        target={<h1>Samuele Piazzesi</h1>}>
        <Tween staggerFrom={{ opacity:0 }} staggerTo={{opacity:1}} duration={1}  delay={0.5} />
      </Timeline>
      <Timeline
        target={<h3>Full stack web developer based in Milan, currently working at Rewave</h3>}>
        <Tween staggerFrom={{ opacity:0 }} staggerTo={{opacity:1}} duration={1} delay={1} />
      </Timeline>
      <Ufo/>
    </div>
  )
}

export default Presentation