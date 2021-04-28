import { Component } from 'react';
import firebase from '../../firebase'
import './contactform.css'

const db = firebase.firestore();

class ContactForm extends Component {

  state = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    message: "",
    date: "",
  };

  updateInput = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val
    });
  }

  addMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      first: this.state.firstname,
      last: this.state.lastname,
      company: this.state.company,
      email: this.state.email,
      message: this.state.message,
      date: new Date(),
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    }).then(() => {
      this.setState({
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        message: "",
      })
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });

  }
  
  
  render() {
    return (
      <form onSubmit={this.addMessage}>
        <div className="form-group">
          <label htmlFor="firstname" className='header-color'>First name</label>
          <input type="text" className="form-control" placeholder="First"
            name="firstname"
            value={this.state.firstname}
            onChange={this.updateInput}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lname" className="header-color">Last name</label>
          <input type="text" className="form-control" placeholder="Last"
            name="lastname"
            value={this.state.lastname}
            onChange={this.updateInput}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="InputEmail" className="header-color">Company</label>
          <input type="text" className="form-control" placeholder="Company name"
            name="company"
            value={this.state.company}
            onChange={this.updateInput}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="InputEmail" className="header-color">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.updateInput}
          />
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="message" className="header-color">Message</label>
          <textarea className="form-control" rows="3" placeholder="Type message here"
            name="message"
            value={this.state.message}
            onChange={this.updateInput}
          ></textarea>
          <small id="message" className="form-text text-muted">We will respond to your inquiry as soon as possible.</small>
        </div>
        <button type="submit" className="contact-button mt-4">Submit</button>
      </form>
    );
  }
}
export default ContactForm;