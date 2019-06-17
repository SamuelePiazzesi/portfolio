import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

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
    <footer className="footer">
      <div className="content has-text-centered">
          <h5>
            {data.site.siteMetadata.author}
          </h5>
         @2019
      </div>
    </footer>
  )
}

export default Footer;