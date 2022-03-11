import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface LazyProps {
    src: any;
}
const LazyImg = ({ src }: LazyProps) => {
    return <LazyLoadImage src={src} effect="blur" width="100%" height="100%" />;
};

export default LazyImg;
