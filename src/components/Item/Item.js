import React from "react";
import {withRouter} from "react-router-dom";


const CurrItem = ({ id, type, country, name, imgSrc, weight, price, history }) => {
    let bemClass = type;
    let currCountry = null;
    if (type === "shop" && country) {
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
                {name} {weight}
            </div>
            {currCountry}
            <div className={`${bemClass}__item-price`}>{price}</div>
        </div>
    )
};
export default withRouter(CurrItem);