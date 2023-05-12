
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Testimonials from './Testimonials';
import './App.css';
import Bootcamps from './Bootcamps';
import FAQ from './FAQ';
import Home from './Home';
import Footer from './Footer';


function App() { 
  const [activeSection, setActiveSection] = useState('');

  const handleNavLinkClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">NST</a>
          <button className="navbar-toggler" type="button" onClick={() => setActiveSection('')} >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${activeSection ? 'show' : ''}`}>
            <ul className="navbar-nav  justify-content-end">
              <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
                <a className="nav-link" href="#about" onClick={() => handleNavLinkClick('about')}>About</a>
              </li>
              <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
                <a className="nav-link" href="#contact" onClick={() => handleNavLinkClick('contact')}>Contact</a>
              </li>
              <li className={`nav-item ${activeSection === 'bootcamps' ? 'active' : ''}`}>
                <a className="nav-link" href="#bootcamps" onClick={() => handleNavLinkClick('bootcamps')}>Bootcamps</a>
              </li>
              <li className={`nav-item ${activeSection === 'testimonials' ? 'active' : ''}`}>
                <a className="nav-link" href="#testimonials" onClick={() => handleNavLinkClick('testimonials')}>Testimonials</a>
              </li>
              <li className={`nav-item ${activeSection === 'faq' ? 'active' : ''}`}>
                <a className="nav-link" href="#faq" onClick={() => handleNavLinkClick('faq')}>FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {activeSection === '' && <Home />}
      {activeSection === 'about' && <AboutUs />}
      {activeSection === 'contact' && <ContactUs />}
      {activeSection === 'bootcamps' && <Bootcamps />}
      {activeSection === 'testimonials' && <Testimonials />}
      {activeSection === 'faq' && <FAQ />}
      <Footer />
    </div>
  );
}

export default App;
