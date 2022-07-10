import { useAppSelector } from "App/store";
import Footer from "components/Footer/Footer";
import LoadingScreen from "components/LoadingSceen/LoadingScreen";
import Menu from "components/Menu/Menu";
import NotFound from "components/NotFound/NotFound";
import { selectGuest, selectUser } from "fearture/Auth/authSlice";
import Login from "fearture/Auth/Login";
import Birthday from "fearture/Birthday/Birthday";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import "./scss/index.scss";

function App() {
    const [loading, setLoading] = useState(true);
    const userData = useAppSelector(selectUser);
    const isLoging = Boolean(userData.displayName);
    const guestData = useAppSelector(selectGuest);
    const isGuestLogin = Boolean(guestData.displayName);
    const isLogin = isGuestLogin || isLoging;
    const [load, setLoad] = useState(false);
    useEffect(() => {
        if (isLogin) {
            var timer = setTimeout(() => {
                setLoading(false);
            }, 2000);
        } else {
            setLoading(true);
        }
        return () => clearTimeout(timer);
    }, [isLogin]);
    return (
        <>
            {!isLogin ? (
                <Login />
            ) : (
                <>
                    {loading ? (
                        <LoadingScreen />
                    ) : (
                        <div
                            className="app"
                            style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
                        >
                            <Navbar />
                            <Background />
                            <Menu />
                            <Footer />
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default App;
