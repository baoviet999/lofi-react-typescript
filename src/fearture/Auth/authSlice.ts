import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "App/store";

export interface UserPayLoad {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
}

interface AuthState {
    current: UserPayLoad;
    guest : UserPayLoad
}

const userLocal = localStorage.getItem("user")
const guestLocal = localStorage.getItem("guest")
const initialState: AuthState = {
    current: userLocal !== null ? JSON.parse(userLocal) : {} || {},
    guest: guestLocal !== null ? JSON.parse(guestLocal) : {} || {},
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<UserPayLoad>) {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.current = action.payload;
        },
        logout(state) {
            localStorage.removeItem("user");
            localStorage.removeItem("guest");
            state.current = {};
            state.guest = {};
        },
        loginGuest(state, action: PayloadAction<UserPayLoad>) {
            localStorage.setItem("guest", JSON.stringify(action.payload));
            state.guest = action.payload;
        },
    },
});

const userReducer = authSlice.reducer;
export default userReducer;

export const userActions = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.current;
export const selectGuest = (state: RootState) => state.auth.guest;
