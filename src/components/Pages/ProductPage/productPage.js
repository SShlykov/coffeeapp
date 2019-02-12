import React, {Component} from "react";
import coffeeitem from "./img/coffee_item.jpg"
import {BeansLogo} from "../../SmallComp";

export default class ProductPage extends Component {
    state = {
        data: { country: "Brazil", description: "Lorem", price: "16.99$" }
    };
    render() {
        const { country, description, price} = this.state.data;
        return(
            <div className="productPage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={coffeeitem} alt="coffee_item"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About it</div>
                            <BeansLogo dark/>
                                <div className="shop__point">
                                    <span>Country:</span>
                                    {country}
                                </div>
                                <div className="shop__point">
                                    <span>Description:</span>
                                    {description}
                                </div>
                                <div className="shop__point">
                                    <span>Price:</span>
                                    <span className="shop__point-price">{price}</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}