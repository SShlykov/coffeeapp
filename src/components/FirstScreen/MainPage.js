import React from "react";
import {BeansLogo} from "../SmallComp";

const FirstScreen = () => {
    return(
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <h1 className="title-big">Everything You Love About Coffee</h1>
                    <BeansLogo/>
                    <div className="preview__subtitle">
                        We makes every day full of energy and taste
                    </div>
                    <div className="preview__subtitle">Want to try our beans?</div>
                    <a href="#prev" className="preview__btn">
                        More
                    </a>
                </div>
            </div>
    )
};
export default FirstScreen;