import React from 'react';
import home from './media/home.mp4';
import logo1 from './media/logo1.svg';
import cookie from './media/cookie.svg';
import './Header.css';

export default function Header() {
  return (
    <>
      <div className="cover">
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100vh',
          }}
        >
          <source src={home} type="video/mp4" />
        </video>
        <div className="header">
          <div className="header__inner">
            <div className="header__menu">
              <button className="header__menu__action">
                <span className="header__menu__action__text hoverr">MENU</span>
              </button>
            </div>
            <div className="logo">
              <img src={logo1} type="image/svg" alt="logo" />
            </div>
            <span className="header__loop__link__text hoverr">
              ⚪ STAY IN THE LOOP
            </span>
          </div>
        </div>
        <div className="title">
          <h1>PEOPLE MOVE.&emsp;&emsp;WE BUILD THE WAY</h1>
          <h2 className="navigation">
            A Mobility Lab that does <u>RESEARCH</u>, <u>INVEST</u> and{' '}
            <u>BUILD</u>.
          </h2>
        </div>
        <div className="footer__link">
          <span className="hoverr">TW</span> /{' '}
          <span className="hoverr">IN</span>
          <div className="cookie">
            <img src={cookie} type="image/svg" alt="cookie" />
          </div>
        </div>
      </div>
    </>
  );
}
