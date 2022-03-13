import { useAppDispatch, useAppSelector } from "App/store";
import {
    selectIsPlaying,
    selectListSong,
    selectModeStatus,
    selectOpenTiktok,
    selectRandomIndex,
    selectTheme,
    selectThemeVideo,
    themeAction,
} from "components/Navbar/themeSlice";
import Note from "fearture/Note/Note";
import TikTokPage from "fearture/Tiktok/TikTokPage";
import YoutubeSearch from "fearture/YoutubeSearch/YoutubeSearch";
import React, { useEffect, useRef } from "react";
import "./Background.scss";
import {
    getHome,
    getSong,
    getPlaylists,
    getVideoDetail,
    //... and many other services
} from "nhaccuatui-api-full";
import AccountModal from "fearture/Auth/components/AccountModal/accountModal";
import { selectGuest } from "fearture/Auth/authSlice";

export interface BackgroundProps {
    onPlay?: boolean;
    onPause?: boolean;
    song?: any;
    volumn?: any;
}

const Background = ({ onPlay, onPause, song, volumn }: BackgroundProps) => {
    const theme = useAppSelector(selectTheme);
    const songList = useAppSelector(selectListSong);
    const random = useAppSelector(selectRandomIndex);
    const isPlaying = useAppSelector(selectIsPlaying);
    const dispatch = useAppDispatch();
    const isOpenNote = useAppSelector(selectModeStatus);
    const themeVideo = useAppSelector(selectThemeVideo);

    // getHome().then((data) => console.log(data));
    // getVideoDetail("IXTbg1bBelQKh").then((data) => console.log(data));

    const pauseMusic = () => {
        audioRef.current.pause();
    };
    const audioRef = useRef<any>();
    useEffect(() => {
        dispatch(themeAction.setAudioRef(audioRef.current));
        audioRef.current.src = songList[random];
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        return () => pauseMusic();
    }, [random, songList, isPlaying, dispatch]);

    const isOpenTiktok = useAppSelector(selectOpenTiktok);
    const handleAsync = async () => {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("aaa");
            }, 2000);
        });
        console.log(data);
    };
    useEffect(() => {
        handleAsync();
    }, []);

    const guestData = useAppSelector(selectGuest)

    return (
        <div className="backround">
            <div className="background__container">
                <div className={`background__video ${theme.day === "day" && "active"}`}>
                    <video
                        src={themeVideo.rainDay?.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`background__rain ${theme.rain && "active"}`}
                    />
                    <video
                        src={themeVideo.day?.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`background__rain ${!theme.rain && "active"}`}
                    />
                </div>
                <div className={`background__video ${theme.day === "night" && "active"}`}>
                    <video
                        src={themeVideo.night?.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`background__rain ${!theme.rain && "active"}`}
                    />
                    <video
                        src={themeVideo.rainNight?.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`background__rain ${theme.rain && "active"}`}
                    />
                </div>
            </div>
            <audio
                ref={audioRef}
                className="audio"
                id="audio"
                src="https://dl.dropboxusercontent.com/s/w5tkk03e73s6wrm/Momentum%20-%20Sleepermane.mp3?dl=0"
            ></audio>
            <YoutubeSearch />
            {isOpenNote.note && <Note />}
            {isOpenTiktok && <TikTokPage />}
            
        </div>
    );
};

export default Background;
