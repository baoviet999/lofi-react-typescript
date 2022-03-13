import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";

interface HeaderProps {
    className: string;
}

const Header = ({ className }: HeaderProps) => {
    return (
        <div className="tiktok__header">
            <div className={`tiktok__header-icon ${className}`}>
                <MdOutlineLiveTv />
            </div>
            <div className="tiktok__header-content">
                <div className="tiktok__header-title">Đang Follow</div>
                <div className="tiktok__header-title active">Dành cho bạn</div>
            </div>
            <div className="tiktok__header-icon">
                <BiSearch />
            </div>
        </div>
    );
};

export default Header;
