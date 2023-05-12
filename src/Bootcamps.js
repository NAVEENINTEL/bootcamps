import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const bootcampsData = [
  {
    id: 1,
    title: 'Python Developer Bootcamp',
    image: '1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula quis turpis luctus, eget tempor dolor faucibus.',
  },
  {
    id: 2,
    title: 'React JS Bootcamp',
    image: '1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula quis turpis luctus, eget tempor dolor faucibus.',
  },
  {
    id: 3,
    title: 'Web Design Bootcamp',
    image: '1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula quis turpis luctus, eget tempor dolor faucibus.',
  },
];

function Bootcamps() {
  return (
    <div className="container my-5 p-3 bg-light">
      <h2 className="mb-4">Bootcamps</h2>
      <div className="row">
        {bootcampsData.map((bootcamp) => (
          <div className="col-md-4 mb-4" key={bootcamp.id}>
            <div className="card">
              <img src={bootcamp.image} className="card-img-top" alt={bootcamp.title} />
              <div className="card-body">
                <h5 className="card-title">{bootcamp.title}</h5>
                <p className="card-text">{bootcamp.description}</p>
                <a href="/" className="btn btn-primary  m-2">View Details</a>
                <a href="/" className="btn btn-secondary m-2">Book Demo</a>
                <a href="/" className="btn btn-success">Apply Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row pt-5">
        {bootcampsData.map((bootcamp) => (
          <div className="col-md-4 mb-4" key={bootcamp.id}>
            <div className="card">
              <img src={bootcamp.image} className="card-img-top" alt={bootcamp.title} />
              <div className="card-body">
                <h5 className="card-title">{bootcamp.title}</h5>
                <p className="card-text">{bootcamp.description}</p>
                <a href="/" className="btn btn-primary  m-2">View Details</a>
                <a href="/" className="btn btn-secondary m-2">Book Demo</a>
                <a href="/" className="btn btn-success">Apply Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Bootcamps;
