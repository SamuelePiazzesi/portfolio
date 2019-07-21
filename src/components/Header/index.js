import React from 'react';
import { Link , graphql, useStaticQuery} from "gatsby";
import { Icon } from "../primitives"
import logo from '../../images/worldwide.svg';

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
      <nav className="navbar is-fixed-top" id={'navbar-top'} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} id="home-logo"/>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
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
export default Header;
