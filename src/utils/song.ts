export interface Audio {
    link?: string;
    isPlay ?: boolean;
}
export const AudioPlay = ( {link, isPlay} : Audio ) => {
    if (isPlay) {
        new Audio(link).pause(); //under folder public
    } else {
        new Audio(link).play(); //under folder public
    }
};
