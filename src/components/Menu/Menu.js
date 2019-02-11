import React from "react";
import {Image, logo, logoBlack} from "../SmallComp";
import {Link} from 'react-router-dom';

const Menu = ({dark}) => {
    let curLogo = logo;
    let clazzName = "header__item";
    let containerClass = "col-lg-6";
    if(dark){
        curLogo = logoBlack;
        clazzName = "footer__item";
        containerClass= "col-lg-6 offset-lg-3"
    }
    return(
            <div className="row">
                <div className={containerClass}>
                    <ul className="header">
                        <Link className={clazzName} to={"/"}>
                                <Image src={curLogo}/>
                        </Link>
                        <Link className={clazzName} to={"/ourcoffee/"}>
                            Our coffee
                        </Link>
                        <Link className={clazzName} to={"/foryourpleasure/"}>
                            For your pleasure
                        </Link>
                        <Link className={clazzName} to={"/contacts/"}>
                            Contact us
                        </Link>
                    </ul>
                </div>
            </div>
    )
};
export default Menu;