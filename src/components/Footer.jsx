import React, { Component } from 'react'
import ContactModal from './ContactModal'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <small>
          Copyright @ {new Date().getFullYear()} <strong>Tubo</strong>
        </small>
        <ContactModal />
      </footer>
    )
  }
}

export default Footer;