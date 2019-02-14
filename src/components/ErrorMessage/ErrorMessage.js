import React from "react";
import {Link} from "react-router-dom";

const ErrorMessage = ({error, button}) => {
    let errorMes= `Error status: ${error}`;
    switch (error) {
        case "404":
            errorMes = `data not found`;
            break;
        case "408":
            errorMes = `request timeout`;
            break;
        case "410":
            errorMes = `gone`;
            break;
        default:
            errorMes= `Error status: ${error}`;
    }
    const link = (button)? <Link to="/" className="preview__btn black-btn">back to main</Link>:null;
    return (
        <div className="error">
            <h2 className="error-title center">{error}</h2>
            <div className="center">{errorMes}</div>
            <div className="center error-description">We are about to fix it</div>
            {link}
        </div>
    )
};
export default ErrorMessage;