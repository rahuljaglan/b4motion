import React from 'react';
import './Invest.css';
import invest from './media/invest.jpg';

export default function Invest() {
  return (
    <>
      <div
        className="row mt-5 marg py-5"
        onClick={() => window.open('https://b4motion.com/invest', '_blank')}
      >
        <div className="col-md-7 invest__image">
          <img className="img-fluid" src={invest} alt="Invest" height="900px" />
        </div>
        <div className="col-md-5 position-relative">
          <h1 className="invest__heading">INVEST</h1>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 text1 align-text-bottom position-absolute bottom-0 start-50 translate-middle-x my-sm-4 invest">
              <h3>INVEST.</h3>
              <h2>We seek compinies with potential to grow with.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
