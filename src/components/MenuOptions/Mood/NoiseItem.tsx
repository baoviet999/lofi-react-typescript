import { Noise } from "model/noise";
import React, { useRef } from "react";
import ReactSlider from "react-slider";
import './NoiseItem.scss';
const NoiseItem = ({ label, icon, path }: Noise) => {
    const noiseRef = useRef<any>();
    return (
        <div className="noise">
            <span>{label}</span>
            <div className="noise__progress">
                <ReactSlider
                    className="noise__slider"
                    defaultValue={0}
                    onChange={(value) => {
                        if (noiseRef.current !== null) {
                            noiseRef.current.volume = value / 100;
                            noiseRef.current.play()
                        }
                    }}
                    renderTrack={(props: any, state) => (
                        <div
                            {...props}
                            className={`noise__track ${state.index === 0 ? "primary" : ""}`}
                            index={state.index}
                        />
                    )}
                    // trackClassName="noise__track"
                    renderThumb={(props) => <div {...props} className="noise__thumb" >
                        <img src={icon} alt="" />
                    </div>}
                />
            </div>
            <audio src={path} ref={noiseRef}></audio>
        </div>
    );
};

export default NoiseItem;
