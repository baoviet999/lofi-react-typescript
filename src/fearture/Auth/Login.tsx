import { useAppDispatch, useAppSelector } from "App/store";
import { logoImg } from "assets/images";
import { googleProvider } from "config/authMethod";
import authentication from "config/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { selectUser, userActions, UserPayLoad } from "./authSlice";
import "./Login.scss";
const Login = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUser);
    const handleLogin = async (provider: GoogleAuthProvider) => {
        await signInWithPopup(authentication, provider).then((res) => {
            const { user } = res;
            dispatch(userActions.login(user));
        });
    };
    const handleLoginGuest = () => {
        dispatch(
            userActions.loginGuest({
                displayName: "Guest Account",
                email: "guest@gmail.com",
                photoURL: "",
            })
        );
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logoImg} alt="" />
            </div>
            <div className="login__content">
                <h1>Welcome!</h1>
                <h4>Log in to your account</h4>
                <div className="login__btn-group">
                    <div className="login__btn" onClick={() => handleLogin(googleProvider)}>
                        <span>Login With Google</span>
                    </div>
                    <div className="login__btn" onClick={handleLoginGuest}>
                        <span>Try it free!!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
