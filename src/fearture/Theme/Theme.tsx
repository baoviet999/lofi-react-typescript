import themeData from "link/theme";
import { ThemeData } from "model/common";
import React from "react";
import ThemeItem from "./components/ThemeItem/ThemeItem";
import "./Theme.scss";

interface ThemeProps {
    onChangeSet: (theme: ThemeData) => void;
    name?: string;

}

const Theme = ({ onChangeSet , name}: ThemeProps) => {
    return (
        <div className="theme">
            <h3>{name}</h3>
            <div className="theme__list">
                {themeData.map((theme, index) => (
                    <ThemeItem onHandleChange={onChangeSet} theme={theme} />
                ))}
            </div>
        </div>
    );
};

export default Theme;
