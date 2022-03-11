import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./MenuItem.scss";

export interface ItemProps {
    name: string;
    borderBottom?: boolean;
    icon: any;
    size?: boolean;
    active: boolean;
}

const MenuItem = ({ icon, borderBottom, size, active, name }: ItemProps) => {
    const location = useLocation();
    const id = location.pathname.slice(1);
    const history = useHistory();
    const handleLinkClick = () => {
        if (id === name) {
            history.push("/");
        } else {
            history.push(`/${name}`);
        }
    };
    return (
        <div onClick={() => handleLinkClick()}>
            <div className={`menu-item ${active ? "active" : ""}`}>
                <div className={`menu-item__icon`}>
                    <img src={icon} alt="" className={`${size && "small"} ${active ? "active" : ""}`} />
                </div>
                {borderBottom && <div className="menu-item__border"></div>}
            </div>
        </div>
    );
};

export default MenuItem;
