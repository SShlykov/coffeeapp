import React from "react";
import cofmaf from "./img/CofMaf.png";
import arrowLeft from "./img/ArrowLeft.png";

let Thanks = ({anotherMes}) => {
    return(
        <div className="thanksBlock">
            <h2 className="title thanksTitle">
                Thank you so much<br/>
                We contact you as soon as posible
            </h2>
            <div className="cofmafImage">
                <img src={cofmaf} alt="icon"/>
            </div>
            <div className="centred">
                <button className="anotherButton" onClick={() => anotherMes()}>Another ?&nbsp; <img src={arrowLeft} alt="↩"/></button>
            </div>
        </div>
    )
};
export default Thanks;