import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import '../../scss/main.scss';


const Layout = ({children}) => {
  return (
    <div>
      <div className="stars-container">
        <div id="stars"></div>
        <div id="starsTwo"></div>
        <div id="starsThree"></div>
      </div>
      <div className="main">
        <div className="main-container">
          <Header/>
          <div className="content">
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;