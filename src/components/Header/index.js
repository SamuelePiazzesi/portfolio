import React from 'react';
import { Link , graphql, useStaticQuery} from "gatsby";
import { Icon } from "../primitives"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        } 
      }
    }
 `)
  return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
             data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item i-animation" activeClassName="active" to="/projects">
              <Icon name="Rocket"/>
              <span>Projects</span>
            </Link>
            <Link className="navbar-item i-animation" activeClassName="active" to="/skills">
              <Icon name="Info"/>
              <span>My skills</span>
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
export default Header;
