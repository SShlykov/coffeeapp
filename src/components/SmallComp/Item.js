import React from "react";

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
                {name} {weight}
            </div>
            {currCountry}
            <div className={`${bemClass}__item-price`}>{price}</div>
        </div>
    )
};
export default Item;