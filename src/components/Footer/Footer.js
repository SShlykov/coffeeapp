import React from "react";
import {BeansLogo} from "../SmallComp";
import Menu from "../Menu";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                        <Menu dark/>
                <BeansLogo dark/>
            </div>
        </footer>
    )
};

export default Footer;