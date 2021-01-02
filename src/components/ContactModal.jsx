import React, { Component } from 'react'
import Swal from 'sweetalert2';
class ContactModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: 'suggestion',
      name: '',
      email: '',
      message: ''
    }
  }

  handleCategoryChange = event => {
    this.setState( { category: event.target.value } );
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  encode = obj => {
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join("&");
  }

  onSubmit = event =>{
    fetch("/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact-us-form", ...this.state })
    })
    .then(() =>{
      Swal.fire({
        toast: true,
        title: "Message sent!!",
        icon: 'success',
        timer: 4000,
        position: 'bottom-end',
        showConfirmButton: false,
      })
    })
    .catch(error => {
      Swal.fire({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        title: error.message,
        icon: 'error',
        timer: 4000
      })
    }).finally(()=>{
      document.querySelector('.btn-close').click();
    });

    event.preventDefault();
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
            <form onSubmit={ this.onSubmit }>
              <div className="form-group">
                <label htmlFor="name">Name <small>(optional)</small></label>
                <input className="input-block" onChange={ this.handleInput } value={ this.state.name } type="text" name="name" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <small>(optional)</small></label>
                <input className="input-block" onChange={ this.handleInput } value={ this.state.email }  type="email" name="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select required onChange={ this.handleCategoryChange } className="input-block" defaultValue="suggestion" name="category" id="category">
                  <option value="compliment">Compliment</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{ this.state.category } *</label>
                <textarea required className="input-block" name="message" value={ this.state.message } onChange={ this.handleInput } id="message" placeholder={ `What's your ${this.state.category}` }></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn-block">Send { this.state.category }</button>
              </div>
              <input type="hidden" name="form-name" value="contact-us-form" />
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ContactModal
