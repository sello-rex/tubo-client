import React, { Component } from 'react'

class ContactModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: 'suggestion'
    }
  }

  handleCategoryChange = event => {
    this.setState( { category: event.target.value } );
  }

  render() {
    return (
      <React.Fragment>
        <small className="modal-btn">
          <label id="contact-us-btn" htmlFor="contact-us-modal">Contact Us</label>
        </small>
        <input className="modal-state" id="contact-us-modal" type="checkbox" />
        <div className="modal">
          <label className="modal-bg" htmlFor="contact-us-modal"></label>
          <div className="modal-body">
            <label className="btn-close" htmlFor="contact-us-modal">X</label>
            <h4 className="modal-title">Have something to say?</h4>
            <h5 className="modal-subtitle">Speak your mind, we are here to listen.</h5>
            <p className="modal-text">You do no need to tell us your name or your email, we just want to know your thoughts, though they would be great have so we can reply to you.</p>
            <form name="contact-use-form" data-netlify="true">
              <div className="form-group">
                <label htmlFor="name">Name <small>(optional)</small></label>
                <input className="input-block" type="text" name="name" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <small>(optional)</small></label>
                <input className="input-block" type="email" name="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select onChange={ this.handleCategoryChange } className="input-block" defaultValue="suggestion" name="category" id="category">
                  <option value="compliment">Compliment</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{ this.state.category } *</label>
                <textarea className="input-block" id="message" placeholder={ `What's your ${this.state.category}` }></textarea>
              </div>
              <div className="form-group">
                <button className="btn-block">Send { this.state.category }</button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ContactModal
