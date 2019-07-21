import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"
import { Icon } from "../primitives"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
      siteMetadata {
        author
      } 
    }
  }
  `)
  return (
    <nav className={'navbar is-fixed-bottom'} id={'navbar-bottom'}>
      <div className={'navbar-mobile-menu'}>
        <div className={'navbar-center'}>
          <Link className="navbar-item i-animation" activeClassName="active" to="/projects">
            <Icon name="Rocket"/>
            <span>Projects</span>
          </Link>
          <Link className="navbar-item i-animation" activeClassName="active" to="/skills">
            <Icon name="Info"/>
            <span>Skills</span>
          </Link>
          <Link className="navbar-item i-animation" activeClassName="active" to="/contact">
            <Icon name="Mail"/>
            <span>Contact</span>
          </Link>
          <a className="navbar-item i-animation normal-link" href="https://github.com/SamuelePiazzesi" target="_blank">
            <Icon name="GitHub"/>
            <span>Github</span>
          </a>
          <a className="navbar-item i-animation" href="https://www.linkedin.com/in/samuelepiazzesi/" target="_blank">
            <Icon name="LinkedIn"/>
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Footer;