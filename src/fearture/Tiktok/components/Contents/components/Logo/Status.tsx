import React, { useEffect, useState } from "react";
import { ImHeart } from "react-icons/im";
interface StatusProps {
    icon: any;
    title: string;
    isLike?: boolean;
}

const Status = ({ isLike, icon, title }: StatusProps) => {
    const [love, setLove] = useState(false)
    useEffect(() => {
        isLike ? setLove(true) : setLove(false)
    },[])
    return (
        <div className={`tiktok__status ${love ? "like" : ""}`} onClick={()=> setLove(!love)}>
            <div className={`tiktok__status-icon`}>{icon}</div>
            <div className="tiktok__status-title">{title}</div>
        </div>
    );
};

export default Status;
