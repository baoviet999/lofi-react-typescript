import React from "react";
import './YoutubeModal.scss'
import Draggable, { DraggableCore } from "react-draggable";
import LazyImg from "components/LazyImage";
import { closeIcon } from "assets/icons";

interface ModalProps {
    link: string;
    onOpen: () => void;
}

const YoutubeModal = ({link , onOpen} : ModalProps) => {
    return (
        <>
            <Draggable handle=".handle">
                <div className="modal handle">
                    <div className="modal__iframe">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${link}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                    <div className="youtube__close" onClick={() => onOpen()}>
                        <LazyImg src={closeIcon} />
                    </div>
                </div>
            </Draggable>
        </>
    );
};

export default YoutubeModal;
