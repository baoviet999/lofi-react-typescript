import useElementOnScreen from "hooks/useAutoPlay";
import { Tiktok } from "model/common";
import { useEffect, useRef, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import ReactSlider from "react-slider";
import { ClimbingBoxLoader } from "react-spinners";
import Description from "../Description/Description";
import Logo from "../Logo/Logo";
import "./Video.scss";
export interface TikTokVideoProps {
    detailVideo?: boolean;
    item?: Tiktok;
}

const Video = ({ detailVideo, item }: TikTokVideoProps) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    useEffect(() => {
        if (videoRef.current) {
            playing ? videoRef.current.play() : videoRef.current.pause();
        }
    }, [playing]);
    const handlePlay = () => {
        setPlaying(!playing);
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);
    useEffect(() => {
        if (isVisibile && videoRef.current) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing && videoRef.current) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    const [progress, setProgress] = useState(0);
    const showCurrentTime = (video: any) => {
        setProgress((video.currentTime / video.duration) * 100);
    };
    useEffect(() => {
        videoRef.current?.addEventListener("timeupdate", () => {
            showCurrentTime(videoRef.current);
        });
        return () =>
            videoRef.current?.removeEventListener("timeupdate", () => {
                showCurrentTime(videoRef?.current);
            });
    }, []);

    if (detailVideo) {
        return (
            <div className="content__video">
                <div className="content__detail">
                    <span style={{ fontSize: "20px" }}>Bin sinh nhật vui vẻ 🎉</span>
                    <ClimbingBoxLoader color={"#ff0050"} loading={!playing} size={20} />
                </div>
            </div>
        );
    }
    return (
        <div className={`content__video ${inView}`} ref={ref}>
            <video
                className={``}
                onClick={handlePlay}
                id="video"
                autoPlay={inView}
                ref={videoRef}
                loop
                src={item?.video}
            />
            {!playing && (
                <div className="content__btn" onClick={handlePlay}>
                    <BiPlay />
                </div>
            )}
            <ReactSlider
                className="tiktok__slider"
                onChange={(value) => {
                    if (videoRef.current) {
                        videoRef.current.currentTime = (value * videoRef.current.duration) / 100;
                    }
                }}
                value={progress}
                renderTrack={(props: any, state) => (
                    <div
                        {...props}
                        className={`tiktok__track ${state.index === 0 ? "primary" : ""}`}
                        index={state.index}
                    />
                )}
                trackClassName="mood__track"
                renderThumb={(props) => <div {...props} className="tiktok__thumb" />}
            />
            <Logo item={item} />
            <Description
                music={item?.status.music}
                playing={playing}
                namePage={item?.namePage}
                content={item?.content}
                content2={item?.content2}
            />
        </div>
    );
};
export default Video;
