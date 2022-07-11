export interface Context {
    theme: string;
    setTheme : ( newTheme: string ) => void;
}
export interface Params {
    part: string;
    maxResults: string;
    key: string;
    q: string;
    type: string;
}

// Video
export interface ThemeVideo {
    video: any;
    status : boolean
}

export interface ThemeChosse {
    day?: ThemeVideo;
    night?: ThemeVideo;
    rainDay?: ThemeVideo;
    rainNight?: ThemeVideo;
}

export interface Sence{
    imgSence: any;
    data: ThemeChosse
}


export interface ThemeData {
    imgSet: any;
    sence : Sence[]
}

// Tiktok detail and Video

export interface TiktokAccount{
    avatar?: string;
    follower?: string;
    following?: string;
    totalLike?: string;
    isFollow?: boolean;
    desc1?: string;
    desc2 ?:string
}
export interface TiktokStatus {
    like: string;
    comment: string;
    share: string;
    music: string;
    isLike : boolean
}

export interface Tiktok {
    video: string;
    namePage: string;
    content: string;
    content2: string;
    account: TiktokAccount;
    status: TiktokStatus;
}