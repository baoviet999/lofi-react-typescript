import React, { useState } from "react";
import { BiMusic } from "react-icons/bi";
import "./Description.scss";

interface DescriptionProps {
    namePage?: string;
    content?: string;
    content2?: string;
    music?: string;
    playing: boolean;
}

const Description = ({ music, namePage, content, playing, content2 }: DescriptionProps) => {
    const [translate, setTranslate] = useState(content);
    const handleTranslate = () => {
        translate === content ? setTranslate(content2) : setTranslate(content);
    };
    return (
        <div className="description">
            <div className="description__name">@{namePage}</div>
            <div className="description__content">{translate}</div>
            <div className="description__translate" onClick={handleTranslate}>
                Xem bản dịch
            </div>
            <div className="description__wrapper-icon">
                <BiMusic />
            </div>
            <div className="description__wrapper">
                <div className={`description__rotate ${playing ? "active" : ""}`}>
                    <div>{music}</div>
                    <div>{music}</div>
                    <div>{music}</div>
                    <div>{music}</div>
                    <div>{music}</div>
                </div>
            </div>
            <div className="header__container"></div>
        </div>
    );
};

export default Description;
