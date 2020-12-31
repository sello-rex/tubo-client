import React, { Component } from 'react';
import logo from '../newlogo1.png';

class Navbar extends Component {
  render (){
    return (
      <nav className='split-nav' id="navbar">
        <div className='nav-brand'>
          <h3 id="logo-container">
            <img src={logo} alt="logo" id="logo-img"/>
          </h3>
        </div>
      </nav>
    )
  }
}

export default Navbar;