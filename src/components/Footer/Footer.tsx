import { useAppDispatch, useAppSelector } from "App/store";
import { selectAudioRef, selectIsPlaying, selectListSong, themeAction } from "components/Navbar/themeSlice";
import React from "react";
import { nextIcon, pauseIcon, playIcon, prevIcon } from "../../assets/icons";
import "./Footer.scss";
const Footer = () => {
    const dispatch = useAppDispatch();
    const isPlaying = useAppSelector(selectIsPlaying)
    const audioRef = useAppSelector(selectAudioRef)
    const listSong = useAppSelector(selectListSong)
    const handleClickPlay = () => {
        console.log(isPlaying)
        const isOpen = isPlaying ? false : true;
        dispatch(themeAction.setIsPlaying(isOpen));
        // if (audioRef.onplay) {
        //     audioRef.pause()
        // } else {
        //     audioRef.play();
        // }
    }
    const handlePlayRandom = () => {
        dispatch(themeAction.setRandom(listSong))
    }
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__title">
                    <span>Music by -lofi.co 2021</span>
                </div>
                <div className="footer__btn">
                    <div className="footer__btn-next" onClick={handlePlayRandom}>
                        <img src={prevIcon} alt="" />
                    </div>
                    <div className="footer__btn-play" onClick={handleClickPlay}>
                        {isPlaying ? <img src={pauseIcon} alt="" /> : <img src={playIcon} alt="" />}
                    </div>
                    <div className="footer__btn-next" onClick={handlePlayRandom}>
                        <img src={nextIcon} alt="" />
                    </div>
                </div>
                <div className="footer__note">
                    <span>Hellu</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
