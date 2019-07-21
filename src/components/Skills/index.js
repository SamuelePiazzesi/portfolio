import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
    <div className='skills'>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>My skills</h1>
        <div id="skills">
          <div className="columns is-tablet">
          <Javascript/>
          <Sass/>
          <ReactSkill/>
          <Node/>
          </div>
          <div className="columns is-tablet">
          <Laravel/>
          <Sql/>
          <PostGresql/>
          <Git/>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Skills