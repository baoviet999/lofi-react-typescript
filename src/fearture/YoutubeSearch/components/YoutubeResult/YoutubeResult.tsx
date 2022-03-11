import { Videos } from "fearture/YoutubeSearch/YoutubeSearch";
import React from "react";
import { CircularProgress } from "react-cssfx-loading/lib";
import VideoItem from "../VideoItem/VideoItem";

interface YoutubeProps {
    loading: boolean;
    successData: Videos[];
    handleOpenModal: ({ link, name, img }: Videos) => void;
}

const YoutubeResult = ({ loading, successData, handleOpenModal }: YoutubeProps) => {
    return (
        <>
            {successData.length > 0 ? (
                successData.map((video, index) => (
                    <VideoItem
                        onOpenModal={handleOpenModal}
                        key={index}
                        name={video.name}
                        img={video.img}
                        link={video.link}
                    />
                ))
            ) : (
                <div className="youtube__notfound">Not found result</div>
            )}
        </>
    );
};

export default YoutubeResult;
