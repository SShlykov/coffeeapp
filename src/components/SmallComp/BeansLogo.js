import React from "react";
import beansLogo from "./logo/Beans_logo.svg";
import beansLogoDark from "./logo/Beans_logo_dark.svg";
import {Image} from "./index";

const BeansLogo = ({dark}) => {
    let src=beansLogo;
    if(dark){
        src = beansLogoDark
    }
    return (
        <Image className="beanslogo"
               src={src}
               alt="Beans logo"
        />
    )
};
export default BeansLogo;