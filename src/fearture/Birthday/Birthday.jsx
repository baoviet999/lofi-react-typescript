import React from "react";
import "./Birthday.scss";

const Birthday = () => {
    return (
        <>
            <div className="moon">
                <div className="crater1"></div>
                <div className="crater2"></div>
                <div className="crater3"></div>
            </div>
            <canvas id="canvas"></canvas>
            <div id="sea"></div>
            <div id="beach"></div>
            <img
                src="https://dl.dropbox.com/s/2k0mtrxc2dqurmh/jumping.png"
                alt="jumping-people"
                id="people"
            />

            <div id="merrywrap" className="merrywrap">
                <div className="giftbox">
                    <div className="cover">
                        <div></div>
                    </div>
                    <div className="box"></div>
                </div>
                <div className="icons">
                    <div className="row">
                        <span>F</span>
                        <span>e</span>
                        <span>l</span>
                        <span>i</span>
                        <span>z</span>
                    </div>
                    <div className="row">
                        <span>C</span>
                        <span>u</span>
                        <span>m</span>
                        <span>p</span>
                        <span>l</span>
                        <span>e</span>
                        <span>a</span>
                        <span>ñ</span>
                        <span>o</span>
                        <span>s</span>
                    </div>
                    <div className="row">
                        <span>E</span>
                        <span>d</span>
                        <span>g</span>
                        <span>y</span>
                    </div>
                </div>
            </div>

            <div id="video"></div>
        </>
    );
};

export default Birthday;
