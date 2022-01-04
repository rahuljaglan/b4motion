import React from 'react';
import build from './media/build.jpg';
import './Build.css';

export default function Build() {
  return (
    <>
      <div
        
        className="row mt-5 marg"
      >
        <div className="col-md-5 position-relative" onClick={() => window.open('https://b4motion.com/build', '_blank')}>
          <p className="first__heading">WHAT WE DO</p>
          <p className="second__heading">(01/03)</p>
          <h1 className="build__heading">BUILD</h1>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 text1 align-text-bottom position-absolute bottom-0 start-50 translate-middle-x my-sm-4 build">
              <h3 className="fw-bold">BUILD</h3>
              <h2>
                First and foremost, we are entrepreneurs sprouting our own
                mobility ideas.
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-7 build__image ">
          <img className="img-fluid" src={build} alt="p1" height="700px" />
        </div>
      </div>
    </>
  );
}
