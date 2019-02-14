import React from "react";
import {BeansLogo} from "../../SmallComp";

const ProductPage = ({name, country, description, price, url}) => {
        return (
            <div className="productPage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={url} alt="coffee_item" style={{maxWidth: "100%"}}/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About {name}</div>
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
};
export default ProductPage;