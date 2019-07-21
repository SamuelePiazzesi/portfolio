import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import GamingPlatform from "./Project/GamingPlatform"
import Chariteat from "./Project/Chariteat"

const Projects = () => {
  return (
    <div id='projects'>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>Projects</h1>
      </ScrollAnimation>
      <GamingPlatform/>
      <Chariteat/>
    </div>
  )
}

export default Projects