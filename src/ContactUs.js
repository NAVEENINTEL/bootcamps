import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ContactUs() {
  return (
    <div className="container my-5 p-5 bg-light">
      <h2 className="mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Institute Name</h4>
          <p>ABC Training Institute</p>
          <h4>Contact Number</h4>
          <p>+1 123 456 7890</p>
          <h4>Email ID</h4>
          <p>info@abcinstitute.com</p>
        </div>
        <div className="col-md-6">
          <h4>Address</h4>
          <p>123 Main Street, City, State, Country</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
