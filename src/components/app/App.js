import React, { Component } from "react";
import logo from "./logo/Beans_logo_dark.svg";
import Logo from "./logo/Logo";

export default class App extends Component {
  render() {
    return (
      <>
        <Logo />
      </>
    );
  }
}

class App2 extends Component {
  render() {
    return (
      <>
        <div className="preview">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header>
                  <ul className="header">
                    <li className="header__item">
                      <a href="#logo">
                        <img src={logo} alt="text" />
                      </a>
                    </li>
                    <li className="header__item">
                      <a href="#ourCoffee">Our coffee</a>
                    </li>
                    <li className="header__item">
                      <a href="#forYourPlaesure">For your pleasure</a>
                    </li>
                  </ul>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h1 className="title-big">Everything You Love About Coffee</h1>
                <img
                  className="beanslogo"
                  src="./images/Beans_logo.svg"
                  alt="Beans logo"
                />
                <div className="preview__subtitle">
                  We makes every day full of energy and taste
                </div>
                <div className="preview__subtitle">Want to try our beans?</div>
                <a href="#" className="preview__btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="title">About Us</div>
                <img
                  className="beanslogo"
                  src="logo/Beans_logo_dark.svg"
                  alt="Beans logo"
                />
                <div className="about__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible. Afraid at highly months do things on at.
                  Situation recommend objection do intention so questions. As
                  greatly removed calling pleased improve an. Last ask him cold
                  feel met spot shy want. Children me laughing we prospect
                  answered followed. At it went is song that held help face.
                  <br />
                  <br />
                  Now residence dashwoods she excellent you. Shade being under
                  his bed her, Much read on as draw. Blessing for ignorant
                  exercise any yourself unpacked. Pleasant horrible but confined
                  day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="best">
          <div className="container">
            <div className="title">Our best</div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">
                  <div className="best__item">
                    <img
                      src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                      alt="coffee"
                    />
                    <div className="best__item-title">
                      Solimo Coffee Beans 2kg
                    </div>
                    <div className="best__item-price">10.73$</div>
                  </div>
                  <div className="best__item">
                    <img
                      src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                      alt="coffee"
                    />
                    <div className="best__item-title">
                      Presto Coffee Beans 1kg
                    </div>
                    <div className="best__item-price">15.99$</div>
                  </div>
                  <div className="best__item">
                    <img
                      src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                      alt="coffee"
                    />
                    <div className="best__item-title">
                      AROMISTICO Coffee 1kg
                    </div>
                    <div className="best__item-price">6.99$</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-4">
                <ul className="footer">
                  <li className="footer__item">
                    <a href="#logo">
                      <img src="logo/Logo_black.svg" alt="logo" />
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#">Our coffee</a>
                  </li>
                  <li className="footer__item">
                    <a href="#">For your pleasure</a>
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="beanslogo"
              src="logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
          </div>
        </footer>
      </>
    );
  }
}
