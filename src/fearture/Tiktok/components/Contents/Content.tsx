import TIKTOK from "link/tiktokVideo";
import { Tiktok } from "model/common";
import "swiper/css/effect-fade";
import { useSwiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import Video from "./components/Video/Video";
import "./Content.scss";
const Content = () => {
    const swiper = useSwiper();
    return (
        <div className="content">
            <Video detailVideo={true} />
            {TIKTOK.map((item : Tiktok  ) => (
                <Video item={item}/>
            ))}
        </div>
    );
};

export default Content;
