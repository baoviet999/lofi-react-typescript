import { BiCommentDots, BiShare, BiUserCircle } from 'react-icons/bi';
import { ImHeart } from 'react-icons/im';
import { FaHeart, FaPlus } from "react-icons/fa";
import './Logo.scss'
import Status from './Status';
import { Tiktok } from 'model/common';

interface LogoProps {
    item ?:Tiktok
}

const Logo = ({item} : LogoProps) => {
    return (
        <div className="tiktok__logo">
            <div className="tiktok__logo-img">
                <img src={item?.account.avatar} alt={item?.account.avatar} />
                <div className="tiktok__logo-badge">
                    <FaPlus />
                </div>
            </div>
            <div className="tiktok__list">
                <Status isLike={item?.status.isLike} title={item?.status.like || ""} icon={<FaHeart />} />
                <Status isLike={item?.status.isLike} title={item?.status.comment || ""} icon={<BiCommentDots />} />
                <Status isLike={item?.status.isLike} title={item?.status.share || ""} icon={<BiShare />} />
            </div>
        </div>
    );
}
export default Logo