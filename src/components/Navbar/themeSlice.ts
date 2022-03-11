import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "App/store";
import { MUSIC_SLEEPY } from "link/music-sleepy";
import { theme1 } from "link/theme";
import { ThemeChosse } from "model/common";
export interface ModeStatus {
        section?: boolean;
        tasks?: boolean;
        note?: boolean;
        history ?: boolean;
    }
export interface ThemeState {
    theme: {
        day: "night" | "day";
        rain: boolean;
    };
    audioRef?: any;
    listSong: string[];
    isPlaying: boolean;
    randomsong: number;
    openYt: boolean;
    modeStatus: ModeStatus;
    themeVideo: ThemeChosse;
    openTiktok: boolean;
}
const initialState: ThemeState = {
    theme: {
        day: "day",
        rain: false,
    },
    audioRef: "",
    listSong: MUSIC_SLEEPY,
    isPlaying: false,
    randomsong: 0,
    openYt: false,
    modeStatus: {
        section: false,
        tasks: false,
        note: false,
        history: false,
    },
    themeVideo: theme1.sence[0].data,
    openTiktok: false
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<ThemeState["theme"]>) {
            state.theme = action.payload;
        },
        setListSong(state, action: PayloadAction<string[]>) {
            state.listSong = action.payload;
        },
        setIsPlaying(state, action: PayloadAction<boolean>) {
            state.isPlaying = action.payload;
        },
        setRandom(state, action: PayloadAction<string[]>) {
            state.randomsong = Math.floor(Math.random() * action.payload.length);
        },
        setAudioRef(state, action: PayloadAction<HTMLElement>) {
            state.audioRef = action.payload;
        },
        setOpenYt(state) {
            state.openYt = !state.openYt;
        },
        setModeStatus(state, action: PayloadAction<ModeStatus>) {
            state.modeStatus = { ...state.modeStatus, ...action.payload };
        },
        setNewTheme(state, action: PayloadAction<ThemeChosse>) {
            state.themeVideo = action.payload;
        },
        setOpenTikTok(state, action: PayloadAction<boolean>) {
            state.openTiktok = action.payload;
        }
    },
});

//reducer
const themeReducer = themeSlice.reducer;
export default themeReducer;
//action
export const themeAction = themeSlice.actions;
//select
export const selectTheme = (state: RootState) => state.theme.theme;
export const selectListSong = (state: RootState) => state.theme.listSong;
export const selectIsPlaying = (state: RootState) => state.theme.isPlaying;
export const selectRandomIndex = (state: RootState) => state.theme.randomsong;
export const selectAudioRef = (state: RootState) => state.theme.audioRef;
export const selectOpenYt = (state: RootState) => state.theme.openYt;
export const selectModeStatus = (state: RootState) => state.theme.modeStatus;
export const selectThemeVideo = (state: RootState) => state.theme.themeVideo;
export const selectOpenTiktok = (state: RootState) => state.theme.openTiktok;
