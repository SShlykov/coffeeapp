import React, {Component} from "react";
import coffee from "./img/CoffeeShade.jpg";
import {BeansLogo, Item} from "../../SmallComp";

export default class ForYourPleasure extends Component {
    render() {
        let imageSrc = "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg"
        return(
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-2">
                            <img className="shop__girl" src={coffee} alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our goods</div>
                            <BeansLogo dark/>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/>
                                <br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions.<br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.<br/>
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="row">
                        <div className="col-lg-10 offset-1">
                            <div className="shop__wrapper">
                                <Item name="AROMISTICO Coffee" weight="1" country="Brazil" price="6.99" imgSrc={imageSrc}/>
                                <Item name="AROMISTICO Coffee" weight="1" country="Kenya" price="6.99" imgSrc={imageSrc}/>
                                <Item name="AROMISTICO Coffee" weight="1" country="Columbia" price="6.99" imgSrc={imageSrc}/>
                                <Item name="AROMISTICO Coffee" weight="1" country="Brazil" price="6.99" imgSrc={imageSrc}/>
                                <Item name="AROMISTICO Coffee" weight="1" country="Brazil" price="6.99" imgSrc={imageSrc}/>
                                <Item name="AROMISTICO Coffee" weight="1" country="Brazil" price="6.99" imgSrc={imageSrc}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}