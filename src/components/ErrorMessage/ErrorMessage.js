import React from "react";

const ErrorMessage = ({error}) => {
    const errURL = (errStatus) => process.env.PUBLIC_URL + `/img/error${errStatus}.png`;
    let errorURL = errURL(error);
    let errorMes= `Error status: ${error}`;
    switch (error) {
        case "404":
            errorMes = `${error} data not found`;
            break;
        case "408":
            errorMes = `${error} request timeout`;
            break;
        case "410":
            errorMes = `${error} gone`;
            break;
        default:
            errorURL = errURL(1);
    }
    return (
        <>
            <img src={errorURL} alt="error"/>
            <span>{errorMes}</span>
        </>
    )
};
export default ErrorMessage;