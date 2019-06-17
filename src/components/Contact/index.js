import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const Contact = () => {
  return (
    <div id='contact'>
      <ScrollAnimation animateIn='fadeIn'>
        <h1>Contact</h1>
        <form>
          <div className="field">
            <label className="label is-pulled-left">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" email type="email" placeholder="Your email here..." />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label is-pulled-left">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Tell me something..."></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link is-large is-fullwidth">Submit</button>
            </div>
          </div>
        </form>
      </ScrollAnimation>
    </div>
  )
}

export default Contact