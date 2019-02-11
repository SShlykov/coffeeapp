import React, {Component} from "react";
import {BeansLogo, Item} from "../../SmallComp";

export default class MainPage extends Component {
    render() {
        return(
            <>
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="title">About Us</div>
                                <BeansLogo dark/>
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
                                    <Item type="best" name="Solimo Coffee Beans" weight="2" price="10.73"/>
                                    <Item type="best" name="Presto Coffee Beans" weight="1" price="15.99"/>
                                    <Item type="best" name="AROMISTICO Coffee" weight="1" price="6.99"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}