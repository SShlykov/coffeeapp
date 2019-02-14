import React from "react";

const Image = ({src, className, alt}) => {
    return <img src={src} className={className} alt={alt} width="120px" height="50px"/>
};

export default Image;