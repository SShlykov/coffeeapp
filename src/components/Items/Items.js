import React from "react";
import Item from "../SmallComp";

const Items = ({data, type}) => {
    const isBest = (type === "best")? "best": "shop";
    const items = data.map(item => {
        const {id, name, weight, country, price, imgSrc, url} = item;
        return <Item key={id} id={id} type={isBest} name={name} weight={weight} country={country} price={price} imgSrc={imgSrc||url}/>
    });
    return(
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">
                    {items}
                </div>
            </div>
        </div>
    )
};
export default Items;