import React, {Component} from "react";
import girl from "./img/coffee_girl.jpg"
import {Item, BeansLogo} from "../../SmallComp"

export default class OurCoffee extends Component {
    render() {
        return(
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={girl} alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <BeansLogo dark/>
                                <div className="shop__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                        so questions. <br/>
                                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                        is song that held help face.
                                </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <form action="#" className="shop__search">
                                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                                <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button className="shop__filter-btn">Brazil</button>
                                    <button className="shop__filter-btn">Kenya</button>
                                    <button className="shop__filter-btn">Columbia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shop__wrapper">
                                <Item name="Solimo Coffee Beans" weight="2" country="Brazil" price="10.73"/>
                                <Item name="Presto Coffee Beans" weight="1" country="Brazil" price="15.99"/>
                                <Item name="AROMISTICO Coffee" weight="1" country="Brazil" price="6.99" imgSrc="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg"/>
                                <Item name="Solimo Coffee Beans" weight="2" country="Brazil" price="10.73"/>
                                <Item name="Solimo Coffee Beans" weight="2" country="Brazil" price="10.73" imgSrc="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756"/>
                                <Item name="Solimo Coffee Beans" weight="2" country="Brazil" price="10.73"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
    }