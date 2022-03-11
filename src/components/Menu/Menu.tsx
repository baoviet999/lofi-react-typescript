import MenuItem from "components/MenuItem.tsx/MenuItem";
import SideBar from "components/SideBar/SideBar";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { focusIcon, moodIcon, setIcon, templateIcon } from "../../assets/icons";
import "./Menu.scss";
const Menu = () => {
    const location = useLocation();
    const activeItem = location.pathname.slice(1);
    console.log(activeItem);
    const isOpenOption = location.pathname === "/";
    const isOpenYt = location.pathname === "/youtube";
    const isOpenHistory = location.pathname === "/history";
    const isOpenTiktok = location.pathname === "/tiktok";
    const isOpenTiktokDetail = location.pathname === "/tiktok/detail";
    // listItem.className.classList.add('border')

    useEffect(() => {
        const listItem = document.querySelectorAll(".menu-item");
        listItem[0]?.classList.add("border");
        listItem[3]?.classList.add("border-bt");
    });

    return (
        <div className="menu">
            <div className="menu__container">
                <MenuItem name="mood" icon={moodIcon} borderBottom={true} active={activeItem === "mood"} />
                <MenuItem
                    name="template"
                    icon={templateIcon}
                    borderBottom={true}
                    active={activeItem === "template"}
                />
                <MenuItem
                    name="set"
                    icon={setIcon}
                    borderBottom={true}
                    active={activeItem === "set" || activeItem === "set/sence"}
                />
                <MenuItem name="mode" icon={focusIcon} size={true} active={activeItem === "mode"} />
                <div
                    className={`menu__sidebar ${
                        isOpenOption || isOpenTiktokDetail || isOpenTiktok || isOpenYt || isOpenHistory
                            ? "hidden"
                            : ""
                    }`}
                >
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Menu;
