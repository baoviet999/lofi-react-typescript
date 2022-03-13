import { useAppDispatch, useAppSelector } from "App/store";
import LazyImg from "components/LazyImage";
import { selectGuest, selectUser } from "fearture/Auth/authSlice";
import AccountModal from "fearture/Auth/components/AccountModal/accountModal";
import React, { useState } from "react";
import Switch from "react-switch";
// icon
import { fullscreenIcon, moonIcon, profileIcon, rainyIcon, sunIcon, sunnyIcon } from "../../assets/icons";
import { logoImg } from "../../assets/images";
import "./Navbar.scss";
import { selectTheme, selectThemeVideo, themeAction } from "./themeSlice";

const Navbar = () => {
    const dataTheme = useAppSelector(selectThemeVideo);
    const hasSetTheme = dataTheme.night?.status;

    const [activeSubNav, setActiveSubNav] = useState<boolean>(false);

    const theme = useAppSelector(selectTheme);

    const dispatch = useAppDispatch();
    const handleChange = () => {
        if (theme.day === "night") {
            dispatch(themeAction.setTheme({ ...theme, day: "day" }));
        } else {
            dispatch(themeAction.setTheme({ ...theme, day: "night" }));
        }
    };
    const handleWeatherChange = () => {
        if (theme.rain) {
            dispatch(themeAction.setTheme({ ...theme, rain: false }));
        } else {
            dispatch(themeAction.setTheme({ ...theme, rain: true }));
        }
    };
    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    const guestData = useAppSelector(selectGuest);
    const userData = useAppSelector(selectUser);
    const loginDataWave = userData.displayName ? userData : guestData;
    const [openAccount, setOpenAccount] = useState<boolean>(false);
    const handleAccount = () => {
        setOpenAccount(true);
    };
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__logo">
                    <LazyImg src={logoImg} />
                </div>
                <ul className="nav__list">
                    <li className="nav__item">
                        <span>How it works</span>
                    </li>
                    <li className="nav__item">
                        <span>Upgrade</span>
                    </li>
                    <li className="nav__item">
                        <span>Contact us</span>
                    </li>
                    <li
                        onMouseEnter={() => setActiveSubNav(true)}
                        onMouseLeave={() => setActiveSubNav(false)}
                        className="nav__item"
                    >
                        <span>More</span>
                        <ul className={`nav__sub nav__sub-derection ${activeSubNav && "active"}`}>
                            <li>
                                <span>About Us</span>
                            </li>
                            <li>
                                <span>Submission</span>
                            </li>
                            <li>
                                <span>Spoify</span>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__item">
                        <span>Merch</span>
                        <span>New!</span>
                    </li>
                </ul>
                <div className="nav__right">
                    {hasSetTheme && (
                        <div className="nav__switch nav__right-item">
                            <Switch
                                onChange={handleChange}
                                checked={theme.day === "day"}
                                uncheckedIcon={
                                    <div className="nav__switch-btn">
                                        <img src={moonIcon} alt="" />
                                    </div>
                                }
                                checkedIcon={
                                    <div className="nav__switch-btn">
                                        <img src={sunIcon} alt="" />
                                    </div>
                                }
                                offHandleColor="#fff"
                                onHandleColor="#fff"
                                onColor="#f3a952"
                                offColor="#545459"
                            />
                        </div>
                    )}
                    {hasSetTheme && (
                        <div className="nav__switch nav__right-item">
                            <Switch
                                onChange={handleWeatherChange}
                                checked={!theme.rain}
                                uncheckedIcon={
                                    <div className="nav__switch-btn">
                                        <img src={rainyIcon} alt="" />
                                    </div>
                                }
                                checkedIcon={
                                    <div className="nav__switch-btn">
                                        <img src={sunnyIcon} alt="" />
                                    </div>
                                }
                                offHandleColor="#fff"
                                onHandleColor="#fff"
                                onColor="#f3a952"
                                offColor="#545459"
                            />
                        </div>
                    )}
                    <div className="nav__option nav__right-item" onClick={handleFullScreen}>
                        <LazyImg src={fullscreenIcon} />
                    </div>
                    <div className="nav__option nav__right-item" onClick={handleAccount}>
                        <LazyImg src={profileIcon} />
                    </div>
                    {openAccount && (
                        <AccountModal
                            onCloseModal={() => setOpenAccount(false)}
                            accountData={loginDataWave}
                        />
                    )}
                    <div className="nav__option-btn nav__right-item">
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
