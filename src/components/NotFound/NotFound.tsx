import { notFound } from "assets/images";
import React from "react";
import "./NotFound.scss";
const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
