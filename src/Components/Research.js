import React from 'react';
import research from './media/research.jpg';
import './Research.css';

export default function Research() {
  return (
    <>
      <div
        className="row mt-5 marg py-5"
        onClick={() => window.open('https://b4motion.com/research', '_blank')}
      >
        <div className="col-md-5 position-relative">
          <p className="first__heading">WHAT WE DO</p>
          <p className="second__heading">(01/03)</p>
          <h1 className="research__heading">RESEARCH</h1>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 text1 align-text-bottom position-absolute bottom-0 start-50 translate-middle-x my-sm-4 research">
              <h3 className="fw-bold ">RESEARCH</h3>
              <h2>
                We map the world to find the best technologies, social trend and
                players.
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-7 research__image ">
          <img className="img-fluid" src={research} alt="p1" height="800px" />
        </div>
      </div>
    </>
  );
}
