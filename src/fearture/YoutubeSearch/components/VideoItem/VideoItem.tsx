import { closeIcon } from "assets/icons";
import LazyImg from "components/LazyImage";
import { Videos } from "fearture/YoutubeSearch/YoutubeSearch";
import React from "react";
import Draggable from "react-draggable";
import "./VideoItem.scss";
export interface VideoItemProps {
    name: string;
    img: string;
    onOpenModal?: ({ link, name, img }: Videos) => void;
    link: string;
}

const VideoItem = ({ name, img, link, onOpenModal }: VideoItemProps) => {
    return (
        <div className="video handle" onClick={() => onOpenModal?.({ link, name, img })}>
            <div className="video__name">
                <span>{name}</span>
            </div>
            <div className="video__img">
                <LazyImg src={img} />
            </div>
        </div>
    );
};

export default VideoItem;
