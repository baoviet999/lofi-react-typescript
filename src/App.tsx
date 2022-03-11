import Footer from "components/Footer/Footer";
import LoadingScreen from "components/LoadingSceen/LoadingScreen";
import Menu from "components/Menu/Menu";
import NotFound from "components/NotFound/NotFound";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import "./scss/index.scss";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <div className="app" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
                    <Navbar />
                    <Background />
                    <Menu />
                    <Footer />
                </div>
            )}
            
        </>
    );
}

export default App;
