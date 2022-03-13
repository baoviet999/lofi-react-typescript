import React from "react";
import "./ModeItem.scss";
export interface ModeProps {
    name: string;
    icon: any;
    id: number;
    onClick: (id: number) => void;
}
const Modeitem = ({ name, id, icon, onClick }: ModeProps) => {
    return (
        <div className={`mode-item ${name === 'Notes' && 'active'}`} onClick={() => onClick(id)}>
            <img src={icon} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Modeitem;
