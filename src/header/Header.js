import React, { Component } from 'react';
import './Header.css';
import linkedInIcon from './linkedin.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 {...this.props} className="header">{this.props.children}</h1>
        <a href="https://www.linkedin.com/in/gregory-houchens" target="_blank">
          <img src={linkedInIcon} alt="LinkedIn Profile" className="linked-in-button"/>
        </a>
      </div>
    )
  };
}
export default Header;