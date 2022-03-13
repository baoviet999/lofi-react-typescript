import React from "react";
import { BiMusic } from "react-icons/bi";
import "./Description.scss";

interface DescriptionProps {
    namePage?: string;
    content?: string;
    music?: string;
    playing: boolean;
}

const Description = ({ music, namePage, content, playing }: DescriptionProps) => {
    return (
        <div className="description">
            <div className="description__name">@{namePage}</div>
            <div className="description__content">{content}</div>
            <div className="description__translate">Xem bản dịch</div>
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
