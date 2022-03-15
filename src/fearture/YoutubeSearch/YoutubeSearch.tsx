import youtubeApi from "apis/videoApi";
import { useAppDispatch, useAppSelector } from "App/store";
import LazyImg from "components/LazyImage";
import { selectAudioRef, selectOpenYt, themeAction } from "components/Navbar/themeSlice";
import React, { useEffect, useState } from "react";
import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import Draggable from "react-draggable";
import { Link, NavLink, Route, Switch, useHistory } from "react-router-dom";
import { closeIcon } from "../../assets/icons";
import YoutubeHistory from "./components/YoutubeHistory/YoutubeHistory";
import YoutubeModal from "./components/YoutubeModal/YoutubeModal";
import YoutubeResult from "./components/YoutubeResult/YoutubeResult";
import "./YoutubeSearch.scss";


export interface YoutubeSearchProps {
    active?: boolean;
}
export interface Videos {
    name: string;
    img: string;
    link: string;
}
interface Item {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            media: {
                ulr: string;
            };
        };
    };
}
const YoutubeSearch = () => {
    // redux
    const dispatch = useAppDispatch();
    const active = useAppSelector(selectOpenYt);
    const audioRef = useAppSelector(selectAudioRef);
    //State
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [iframe, setIframe] = useState<string>("");
    const [youtubeData, setYoutubeData] = useState<{ link: string; name: string; img: string }[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    //orther
    const history = useHistory();


    const localHistory = localStorage.getItem("history")
    const youtubeHistory: Videos[] = localHistory !== null ? JSON.parse(localHistory) : [];



    const handleOpenModal = ({link , name , img} : Videos) => {
        dispatch(themeAction.setIsPlaying(false));
        audioRef.pause();
        setIframe(link);
        setOpenModal(true);
        localStorage.setItem("history", JSON.stringify([...youtubeHistory, {name, img, link}]));
    };
    const handleOpenHistory = ({ link, name, img }: Videos) => {
        dispatch(themeAction.setIsPlaying(false));
        audioRef.pause();
        setIframe(link);
        setOpenModal(true);
    };
    const handleOpen = () => {
        setOpenModal(false);
        setIframe("");
    };
    // const videoPreventive = localStorage.getItem("video");
    // const videoPreventive1 = videoPreventive !== null ? JSON.parse(videoPreventive) : [];
    
    //call data ytb here
    useEffect(() => {
        const getVideo = async () => {
            setLoading(true);
            const res = await youtubeApi.getAll({
                part: "snippet",
                maxResults: "20",
                key: "AIzaSyDOXKdyHhFIEs0Whc0E7GUYnRgoDW_v7n4",
                q: search,
                type: "video",
            });
            const data: Item[] = res.items;
            const newVideo = data.map((newVideo: any) => {
                return {
                    link: newVideo.id.videoId,
                    img: newVideo.snippet.thumbnails.high.url,
                    name: newVideo.snippet.title,
                };
            });
            setYoutubeData(newVideo);
            setLoading(false);
            history.push("/youtube");
        };
        if (search !== "" && " ") {
            getVideo();
        }
    }, [search]);
    
    const handleSearch = () => {
        setSearch(searchTerm);
        setSearchTerm("");
    };

    return (
        <>
            {openModal && <YoutubeModal link={iframe} onOpen={handleOpen} />}
            {active && (
                <Draggable handle=".handle">
                    <div className={`youtube ${active ? "active" : ""} `}>
                        <div className="youtube__header handle">
                            <h3>Youtube Video</h3>
                        </div>
                        <div className="youtube__search">
                            <div className="youtube__search-label">Search for Youtube video</div>
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="youtube__search-input"
                                type="text"
                                placeholder="Search..."
                            />
                            <div onClick={handleSearch} className="youtube__search-btn">
                                {loading && (
                                    <div className="youtube__progress" style={{ marginRight: "5px" }}>
                                        <CircularProgress color="#000" width="20px" height="20px" />
                                    </div>
                                )}{" "}
                                Search
                            </div>
                        </div>
                        <div className="youtube__tab">
                            <div className="youtube__tab-item">
                                <NavLink
                                    className="youtube__tab-item"
                                    activeClassName="youtube__tab-active"
                                    to="/youtube"
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className="">
                                <NavLink
                                    className="youtube__tab-item"
                                    activeClassName="youtube__tab-active"
                                    to="/history"
                                >
                                    History
                                </NavLink>
                            </div>
                        </div>
                        <div className="youtube__list">
                            <Switch>
                                <Route path="/youtube">
                                    <YoutubeResult
                                        loading={loading}
                                        successData={youtubeData}
                                        handleOpenModal={handleOpenModal}
                                    />
                                </Route>
                                <Route path="/history" exact>
                                    <YoutubeHistory
                                        loading={loading}
                                        successData={youtubeHistory.reverse()}
                                        onOpenHistory={handleOpenHistory}
                                    />
                                </Route>
                            </Switch>
                        </div>
                        <div className="youtube__close" onClick={() => dispatch(themeAction.setOpenYt())}>
                            <LazyImg src={closeIcon} />
                        </div>
                    </div>
                </Draggable>
            )}
        </>
    );
};

export default YoutubeSearch;

// const newData = datas.forEach((item) => {
//     const video = item.items;
//     video.map((newVideo) => {
//         return {
//             link: newVideo.id.videoId,
//             img: newVideo.snippet.thumbnails.high.url,
//             name: newVideo.snippet.title,
//         };
//     });
// });
