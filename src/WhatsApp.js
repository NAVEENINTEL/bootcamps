import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

function WhatsApp() {
  const handleChat = () => {
    const phoneNumber = '+917032847454'; // Replace with your WhatsApp number
    const message = 'Hello, Lets connect and discuss more here...'; // Replace with your default message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="whatsapp-icon" onClick={handleChat}>
      <FaWhatsapp />
    </div>
  );
}

export default WhatsApp;
