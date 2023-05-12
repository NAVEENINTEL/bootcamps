import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: '1.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula quis turpis luctus, eget tempor dolor faucibus.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '1.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula quis turpis luctus, eget tempor dolor faucibus.',
  },
  {
    id: 3,
    name: 'Mark Johnson',
    image: '1.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula quis turpis luctus, eget tempor dolor faucibus.',
  },
];

function Testimonials() {
  return (
    <div className="container my-5 p-5 bg-light">
      <h2>Testimonials</h2>
      <div className="row">
        {testimonialsData.map((testimonial) => (
          <div className="col-md-4 mb-4" key={testimonial.id}>
            <div className="card">
              <img src={testimonial.image} className="card-img-top rounded-circle p-5" alt={testimonial.name} />
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
