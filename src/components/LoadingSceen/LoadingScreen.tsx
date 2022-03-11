import React from "react";
import { logoImg } from "../../assets/images";
import "./LoadingScreen.scss";
const LoadingScreen = () => {
    return (
        <div className="loading">
            <img src={logoImg} alt="" />
        </div>
    );
};

export default LoadingScreen;
