import { back } from "assets/icons";
import { ThemeChosse, ThemeData } from "model/common";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useHistory } from "react-router-dom";
import "./ThemeSence.scss";
interface SenceProps {
    theme?: ThemeData;
    onChangeTheme?: (data: ThemeChosse) => void;
    path ?:string;
}

const ThemeSence = ({ theme, onChangeTheme, path }: SenceProps) => {
    const history = useHistory();

    return (
        <div className="sence">
            <div className="sence__btn">
                <div className="sence__back" onClick={() => history.push(`/${path}`)}>
                    <img src={back} alt="" />
                </div>
                <h4>Switch scene</h4>
                <div className="sence__back"></div>
            </div>
            <div className="sence__list">
                {theme?.sence.map((item, index) => (
                    <div onClick={() => onChangeTheme?.(item.data)}>
                        <LazyLoadImage effect="blur" alt="" src={item.imgSence} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThemeSence;
