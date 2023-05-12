import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const AboutUs = () => {
  return (
    <div className="container p-5 m-5 bg-light">
      <div className="row">
        <div className="col">
          <img
            src="1.jpg" // Replace with the actual image URL
            alt="Training Institute"
            className="img-fluid"
          />
        </div>
        <div className="col">
          <h2>About Our Training Institute</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat
            suscipit neque, vel efficitur eros venenatis at. Fusce feugiat leo a dolor
            aliquet bibendum. Sed ut magna eget turpis aliquet vulputate. Curabitur
            eleifend augue et dapibus consectetur. Sed tincidunt tristique fringilla.
            Integer eleifend, velit vel ullamcorper bibendum, lectus sapien convallis
            massa, id cursus enim lorem at risus.
          </p>
          <p>
            Phasellus vehicula nibh ut lacinia condimentum. Aliquam erat volutpat.
            Nullam vestibulum sapien a erat finibus, vel hendrerit erat eleifend. Donec
            non posuere felis. Integer ut elit auctor, consectetur nibh et, porta elit.
            Sed interdum pellentesque mi, at efficitur diam dignissim id. Integer a
            pharetra enim. Ut id nisl in odio fermentum faucibus sit amet ut mi. Cras
            vulputate finibus consequat. Curabitur scelerisque elit id nunc eleifend, in
            eleifend elit tristique. Aliquam euismod elementum justo, ut fringilla metus
            eleifend nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
