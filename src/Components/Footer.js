import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer id="newsletter" data-scroll-section="" className="footer">
        <div className="footer__inner">
          <nav className="footer__nav">
            <h6 className="footer__nav__title">(Browse)</h6>
            <ul className="footer__nav__list">
              <li className="footer__nav__list__item">
                <a
                  href={'https://b4motion.com/research'}
                  className="footer__nav__list__item__link"
                >
                  <span className="footer__nav__list__item__link__arrow u-hide--mobile u-hide--tablet">
                    <span className="arrow"></span>
                  </span>
                  <span className="footer__nav__list__item__link__text">
                    Research
                  </span>
                </a>
              </li>
              <li className="footer__nav__list__item">
                <a
                  href={'https://b4motion.com/'}
                  aria-current="page"
                  className="footer__nav__list__item__link nuxt-link-exact-active nuxt-link-active"
                >
                  <span className="footer__nav__list__item__link__arrow u-hide--mobile u-hide--tablet">
                    <span className="arrow"></span>
                  </span>
                  <span className="footer__nav__list__item__link__text">
                    Home
                  </span>
                </a>
              </li>
              <li className="footer__nav__list__item">
                <a
                  href={'https://b4motion.com/invest'}
                  className="footer__nav__list__item__link"
                >
                  <span className="footer__nav__list__item__link__arrow u-hide--mobile u-hide--tablet">
                    <span className="arrow"></span>
                  </span>
                  <span className="footer__nav__list__item__link__text">
                    Invest
                  </span>
                </a>
              </li>
              <li className="footer__nav__list__item">
                <a
                  href={'https://b4motion.com/blog'}
                  className="footer__nav__list__item__link"
                >
                  <span className="footer__nav__list__item__link__arrow u-hide--mobile u-hide--tablet">
                    <span className="arrow"></span>
                  </span>
                  <span className="footer__nav__list__item__link__text">
                    Blog
                  </span>
                </a>
              </li>
              <li className="footer__nav__list__item">
                <a
                  href={'https://b4motion.com/build'}
                  className="footer__nav__list__item__link"
                >
                  <span className="footer__nav__list__item__link__arrow u-hide--mobile u-hide--tablet">
                    <span className="arrow"></span>
                  </span>
                  <span className="footer__nav__list__item__link__text">
                    Build
                  </span>
                </a>
              </li>
              <li className="footer__nav__list__item">
                <a
                  href={'https://b4motion.com/about'}
                  className="footer__nav__list__item__link"
                >
                  <span className="footer__nav__list__item__link__arrow u-hide--mobile u-hide--tablet">
                    <span className="arrow"></span>
                  </span>
                  <span className="footer__nav__list__item__link__text">
                    About
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__newsletter">
            <h6 className="footer__newsletter__title">(Stay in the Loop)</h6>
            <div className="footer__newsletter__form">
              <div className="newsletter">
                <h6 for="newsletterEmail" className="newsletter__label">
                  <span className="newsletter__label__text">
                    Get the most fresh news from the mobility sector.
                  </span>
                </h6>
                <form autocomplete="off" className="newsletter__form">
                  <div className="newsletter__form__inner">
                    <div className="newsletter__form__input">
                      <input
                        type="email"
                        required="required"
                        name="EMAIL"
                        id="newsletterEmail"
                        placeholder="Write your e-mail address…"
                        value=""
                        className="newsletter__form__input__text"
                      />
                    </div>
                    <button
                      type="submit"
                      className="newsletter__form__submit u-hide--tablet u-hide--mobile"
                    >
                      <span className="newsletter__form__submit__text">
                        &nbsp;Subscribe
                      </span>
                      <span className="newsletter__form__submit__arrow">
                        <span className="newsletter__form__submit__arrow__inner">
                          <span className="arrow"></span>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <nav className="footer__partners">
            <h6 className="footer__partners__title">
              <span className="footer__partners__title__text">
                (Our Partner)
              </span>
            </h6>
            <ul className="footer__partners__list">
              <li className="footer__partners__list__item">
                <a
                  href={'https://astara.com/'}
                  className="footer__partners__list__item__link underline"
                >
                  Astara
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__copyright">
            <div className="footer__copyright__year">
              <span className="footer__copyright__year__text">2021 ©</span>
            </div>
            <div className="footer__copyright__company">
              <span className="footer__copyright__company__text">
                B4Motion, S.L.
              </span>
            </div>
          </div>
          <nav className="footer__social">
            <h6 className="footer__social__title">(Follow Us)</h6>
            <ul className="footer__social__list">
              <li className="footer__social__list__item">
                <a
                  href="https://twitter.com/b4motion"
                  className="footer__social__list__item__link underline"
                >
                  Twitter
                </a>
              </li>
              <li className="footer__social__list__item">
                <a
                  href="https://www.linkedin.com/company/b4motion"
                  className="footer__social__list__item__link underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="footer__social__list__item">
                <a
                  href="https://www.youtube.com/channel/UCjjDorfj8DzDEfocYAv8P4w"
                  className="footer__social__list__item__link underline"
                >
                  YouTube
                </a>
              </li>
              <li className="footer__social__list__item">
                <a
                  href="https://medium.com/@B4motion"
                  className="footer__social__list__item__link underline"
                >
                  Medium
                </a>
              </li>
              <li className="footer__social__list__item">
                <a
                  href="https://app.dealroom.co/investors/b4motion"
                  className="footer__social__list__item__link underline"
                >
                  Dealroom
                </a>
              </li>
              <li className="footer__social__list__item">
                <a
                  href="https://www.cbinsights.com/investor/b4motion-venture"
                  className="footer__social__list__item__link underline"
                >
                  CB Insights
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__suized">
            <div className="footer__suized__text">
              &nbsp;B4Motion X&nbsp;
              <a
                href="https://suized.com/"
                className="footer__suized__text__link underline"
              >
                Suized Design Studio
              </a>
            </div>
          </div>
          <nav className="footer__legal">
            <ul className="footer__legal__list">
              <li className="footer__legal__list__item">
                <a
                  href="https://b4motion.com/privacy-policy"
                  className="footer__legal__list__item__link underline"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
