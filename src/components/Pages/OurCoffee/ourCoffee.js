import React from "react";
import girl from "./img/coffee_girl.jpg";
import { BeansLogo} from "../../SmallComp";

const OurCoffee = () => {
        return (
            <>
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
            </>
        )
};
export default OurCoffee;