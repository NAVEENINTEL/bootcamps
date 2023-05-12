import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import WhatsApp from './WhatsApp';


function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
      <ul className="list-inline mb-0">
  <li className="list-inline-item">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>
  </li>
  <li className="list-inline-item">
    <a href="https://wa.me/xxxxxxxxxxx" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </a>
  </li>
</ul>

      </div>
      <div>
      <WhatsApp />
      </div>
    </footer>
  );
}

export default Footer;

