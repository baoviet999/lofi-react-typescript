import { useAppDispatch, useAppSelector } from "App/store";
import { selectAudioRef, themeAction } from "components/Navbar/themeSlice";
import { MUSIC_SLEEPY } from "link/music-sleepy";
import { MUSIC_VN } from "link/music-vn";
import { NOISE_ICONS } from "link/noiseList";
import { Noise } from "model/noise";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReactSlider from "react-slider";
import {
    bookMark,
    chillIcon,
    jazzyIcon,
    searchIcon,
    sleepyIcon,
    volumeMaxIcon,
    volumeMinIcon,
} from "../../../assets/icons";
import "./Mood.scss";
import NoiseItem from "./NoiseItem";

function Mood() {
    const dispatch = useAppDispatch();
    const audioRef = useAppSelector(selectAudioRef);
    const handlePlayListSong = (listSong: string[]) => {
        dispatch(themeAction.setIsPlaying(true));
        dispatch(themeAction.setListSong(listSong));
        dispatch(themeAction.setRandom(listSong));
    };
    const [activeTab, setActiveTab] = useState<any>(() => {
        const local = localStorage.getItem("active");
        return local;
    });
    const handleActiveTab = (name: string) => {
        console.log(activeTab);
        localStorage.setItem("active", name);
        setActiveTab(name);
    };
    return (
        <div className="mood">
            <div className="mood__header">
                <h3>Mood</h3>
                <div className="mood__header-btn">
                    <img src={bookMark} alt="" />
                    <span>Save template</span>
                </div>
            </div>
            <div className="mood__options grid">
                <div className="row sm-gutter">
                    <div className="col l-6">
                        <MoodItem
                            active={activeTab === "Sleepy"}
                            onActiveTab={handleActiveTab}
                            name="Sleepy"
                            icon={sleepyIcon}
                            onPlayListSong={handlePlayListSong}
                        />
                    </div>
                    <div className="col l-6">
                        <MoodItem
                            active={activeTab === "VietNam"}
                            onActiveTab={handleActiveTab}
                            name="VietNam"
                            icon={jazzyIcon}
                            onPlayListSong={handlePlayListSong}
                        />
                    </div>
                    <div className="col l-6">
                        <MoodItem
                            active={activeTab === "Chill"}
                            onActiveTab={handleActiveTab}
                            name="TikTok"
                            icon={chillIcon}
                            onPlayListSong={handlePlayListSong}
                        />
                    </div>
                    <div className="col l-6">
                        <MoodItem
                            active={activeTab === "Youtube"}
                            onActiveTab={handleActiveTab}
                            name="Youtube"
                            icon={searchIcon}
                            onPlayListSong={handlePlayListSong}
                        />
                    </div>
                </div>
            </div>
            <div className="mood__volumn">
                <div className="mood__volumn-icon">
                    <img src={volumeMinIcon} alt="" />
                </div>
                <ReactSlider
                    className="mood__slider"
                    defaultValue={100}
                    onChange={(value) => {
                        if (audioRef !== null) {
                            audioRef.volume = value / 100;
                        }
                    }}
                    renderTrack={(props: any, state) => (
                        <div
                            {...props}
                            className={`mood__track ${state.index === 0 ? "primary" : ""}`}
                            index={state.index}
                        />
                    )}
                    trackClassName="mood__track"
                    renderThumb={(props) => <div {...props} className="mood__thumb" />}
                />
                <div className="mood__volumn-icon">
                    <img src={volumeMaxIcon} alt="" />
                </div>
            </div>
            <div className="mood__noise">
                <h4>Background noises</h4>
                <div className="mood__noiselist">
                    {NOISE_ICONS.map((item: Noise, index) => (
                        <NoiseItem label={item.label} icon={item.icon} path={item.path} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export interface MoodItem {
    name: string;
    icon: any;
    onPlayListSong: (songList: string[]) => void;
    active: boolean;
    onActiveTab: (name: string) => void;
}

const MoodItem = ({ active, onActiveTab, name, icon, onPlayListSong }: MoodItem) => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const handleList = () => {
        if (!onPlayListSong || !onActiveTab) return;
        onActiveTab(name);
        switch (name) {
            case "Sleepy":
                onPlayListSong(MUSIC_SLEEPY);
                break;
            case "VietNam":
                onPlayListSong(MUSIC_VN);
                break;
            case "Youtube":
                history.push("/");
                dispatch(themeAction.setOpenYt());
                break;
            case "TikTok":
                history.push("/tiktok");
                dispatch(themeAction.setOpenTikTok(true));
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`mood__item ${name === "Youtube" || (name === "Tiktok" && "mood__ytb")} ${
                name === "Youtube" || active ? "active" : ""
            } ${name === "TikTok" || active ? "active" : ""}`}
            onClick={handleList}
        >
            <img alt="" src={icon} className={` ${name === "Youtube" ? "mood__scale" : ""}`} />
            <span>{name}</span>
        </div>
    );
};

export default Mood;
