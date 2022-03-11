import { useAppDispatch, useAppSelector } from "App/store";
import { selectModeStatus, themeAction } from "components/Navbar/themeSlice";
import React from "react";
import { useHistory } from "react-router-dom";
import { startSessionIcon, tomatoIcon, notesIcon, historyIcon } from "../../../assets/icons";
import "./Mode.scss";
import Modeitem from "./Modeitem";

const modeDatas = [
    {
        icon: startSessionIcon,
        name: "Start Session",
        id: 1,
    },
    {
        icon: tomatoIcon,
        name: "Timer and Tasks",
        id: 2,
    },
    {
        icon: notesIcon,
        name: "Notes",
        id: 3,
    },
    {
        icon: historyIcon,
        name: "History",
        id: 4,
    },
];

const Mode = () => {
    const dispatch = useAppDispatch();
    const modeStatus = useAppSelector(selectModeStatus)
    const history = useHistory();
    const handleOpenMode = (id : number) => {
        switch (id) {
            case 1:
                history.push('/')
                dispatch(
                    themeAction.setModeStatus({
                        ...modeStatus,
                        section: true,
                    })
                );
                break;
            case 2:
                history.push('/')
                dispatch(
                    themeAction.setModeStatus({
                        ...modeStatus,
                        tasks: true,
                    })
                );
                break;
            case 3:
                history.push('/')
                dispatch(
                    themeAction.setModeStatus({
                        ...modeStatus,
                        note: true,
                    })
                );
                break;
            case 4:
                history.push('/')
                dispatch(
                    themeAction.setModeStatus({
                        ...modeStatus,
                        history: true,
                    })
                );
                break;
            default:
                break;
        }
    }
    return (
        <div className="mode">
            <div className="mode__container">
                <h4>Focus Mode</h4>
                <div className="mode__list">
                    {modeDatas.map((mode, index) => (
                        <Modeitem onClick={handleOpenMode} name={mode.name} icon={mode.icon} key={mode.id} id={mode.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mode;
