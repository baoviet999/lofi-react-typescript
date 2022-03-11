import { Videos } from "fearture/YoutubeSearch/YoutubeSearch";
import React from "react";
import VideoItem from "../VideoItem/VideoItem";

interface YoutubeProps {
    loading: boolean;
    successData: Videos[];
    onOpenHistory : ({ link, name, img }: Videos) => void;
}

const YoutubeHistory = ({ successData, onOpenHistory }: YoutubeProps) => {
    return (
        <>
            {successData.length > 0 ? (
                successData.map((video, index) => (
                    <VideoItem
                        onOpenModal={onOpenHistory}
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

export default YoutubeHistory;
