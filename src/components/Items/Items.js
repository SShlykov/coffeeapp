import React from "react";
import Item from "../SmallComp";

const Items = ({data}) => {
    const items = data.map(item => {
        const {id, name, weight, country, price, imgSrc, url} = item;
        return <Item key={id} id={id} name={name} weight={weight} country={country} price={price} imgSrc={imgSrc||url}/>
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