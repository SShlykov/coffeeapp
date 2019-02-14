import React from "react";
import Item from "../Item";

const Items = ({data, type}) => {
    const isBest = (type === "best")? "best": "shop";
    const items = data.map(item => {
        const {id} = item;
        return <Item key={id} id={id} type={isBest} />
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