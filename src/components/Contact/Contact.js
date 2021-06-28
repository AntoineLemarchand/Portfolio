import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <h1>Contact me !</h1>
        <form method="POST" action="https://formsubmit.co/antoine.lemarchand05@gmail.com">
          <input type="text" name="name" placeholder="Name*"/>
          <input type="text" name="mail" placeholder="Email*"/>
          <textarea id="message" name="message" placeholder="Message*" rows="5"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}


export default Contact
