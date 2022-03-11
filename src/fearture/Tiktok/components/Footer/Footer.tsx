import { useAppDispatch } from "App/store";
import React from "react";
import { BiHome, BiCompass, BiPlus, BiMessageAltMinus, BiUser } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import "./Footer.scss";

interface FooterProps {
    colors?: {
        background: string;
        color: string;
    };
}

const Footer = ({ colors }: FooterProps) => {
    const history = useHistory();
    return (
        <div
            className={`footer-tiktok ${colors?.color ? "fill" : ""}`}
            style={{ background: colors?.background }}
        >
            <div className="footer-tiktok__container" style={{color : colors?.color}}>
                <div className="footer-tiktok__icon active">
                    <div className="footer-tiktok__icon-img" onClick={() => history.push("/tiktok")}>
                        <BiHome />
                    </div>
                    <div className="footer-tiktok__icon-title">Trang chủ</div>
                </div>
                <div className="footer-tiktok__icon">
                    <div className="footer-tiktok__icon-img">
                        <BiCompass />
                    </div>

                    <div className="footer-tiktok__icon-title">Khám phá</div>
                </div>
                <div className="footer-tiktok__icon">
                    <div className="footer-tiktok__icon-img">
                        <BiPlus />
                    </div>
                    <div className="footer-tiktok__icon-title">Quay</div>
                </div>
                <div className="footer-tiktok__icon">
                    <div className="footer-tiktok__icon-img">
                        <BiMessageAltMinus />
                    </div>
                    <div className="footer-tiktok__icon-title">Hộp thư</div>
                    <span className="footer-tiktok__bagde">1</span>
                </div>
                <div className="footer-tiktok__icon">
                    <div className="footer-tiktok__icon-img" onClick={() => history.push("/tiktok/detail")}>
                        <BiUser />
                    </div>
                    <div className="footer-tiktok__icon-title">Hồ sơ</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
