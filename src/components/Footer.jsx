import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <small>
          Copyright @ {new Date().getFullYear()} <strong>Tubo</strong>
        </small>
      </footer>
    )
  }
}

export default Footer;