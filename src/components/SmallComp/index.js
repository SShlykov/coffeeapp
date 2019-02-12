import React from "react";
import { withRouter} from "react-router-dom";
import beansLogoDark from "./logo/Beans_logo_dark.svg";
import beansLogo from "./logo/Beans_logo.svg";
import logo from "./logo/Logo.svg";
import logoBlack from "./logo/Logo_black.svg";

const Image = ({src, className, alt}) => {
    return <img src={src} className={className} alt={alt} width="120px" height="50px"/>
};
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
const Item = ({history, key, id, name, weight, price, country = undefined, type="shop", imgSrc="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"}) => {
    let bemClass = type;
    let currCountry = null;
    if(type === "shop" && country){
        currCountry = <div className="shop__item-country">{country}</div>
    }
    let click = (id) => {
        history.push(`/ourcoffee/${id}`)
    };
    return(
        <div onClick={() => click(id)}
             className={`${bemClass}__item`}
        >
            <img
                src={imgSrc}
                alt="coffee"
            />
            <div className={`${bemClass}__item-title`}>
                {name} {weight}kg
            </div>
            {currCountry}
            <div className={`${bemClass}__item-price`}>{price}$</div>
        </div>
    )
};
export default withRouter(Item);
export {Image, BeansLogo, logo, logoBlack};