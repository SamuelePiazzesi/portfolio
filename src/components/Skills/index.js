import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Element} from 'react-scroll'
import Javascript from "./Skill/Javascript"
import ReactSkill from "./Skill/React"
import Node from "./Skill/Node"
import Laravel from "./Skill/Laravel"
import Sql from "./Skill/MySql"
import PostGresql from "./Skill/PostGresql"
import Git from "./Skill/Git"
import Sass from "./Skill/Sass"


const Skills = () => {
  return (
    <Element name='skills'>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>My skills</h1>
        <div id={'skills'}>
          <Javascript/>
          <Sass/>
          <ReactSkill/>
          <Node/>
          <Laravel/>
          <Sql/>
          <PostGresql/>
          <Git/>
        </div>
      </ScrollAnimation>
    </Element>
  )
}

export default Skills