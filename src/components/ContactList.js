import React from 'react';
import { SocialIcons } from 'react-social-icons';
import Flexbox from 'flexbox-react';
import '../styles/ContactList.css';

const ContactList = () => {

  var urls = [
    'http://twitter.com/_ado',
    'http://linkedin.com/in/adriaant',
    'http://www.github.com/adriaant'
  ];

  return (
    <div className="contact-list">
      <hr/>
      <h2>Contact</h2>
      <Flexbox flexDirection="row" justifyContent="center">
        <SocialIcons urls={urls} color="#838285"/>
      </Flexbox>
    </div>
  );
}

export default ContactList;
