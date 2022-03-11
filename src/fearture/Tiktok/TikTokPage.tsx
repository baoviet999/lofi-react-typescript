import { useAppDispatch } from "App/store";
import { themeAction } from "components/Navbar/themeSlice";
import React from "react";
import Draggable from "react-draggable";
import { Route, Switch } from "react-router-dom";
import TiktokDetail from "./page/TiktokDetail/TiktokDetail";
import Tiktok from "./page/TiktokPage/Tiktok";

const TikTokPage = () => {
    const dispatch = useAppDispatch();
    return (
        <Draggable handle=".handle">
            <div className="tiktok__wrap ">
                {/* style={{cursor : 'move'}} */}
                <div  style={{cursor : 'pointer'}} className="tiktok__wrap-btn" onClick={() => dispatch(themeAction.setOpenTikTok(false))}></div>
                <div className="tiktok__wrap-header">
                    <div className="tiktok__wrap-header-top"></div>
                    <div className="tiktok__wrap-header-bt handle"></div>
                </div>
                <Switch>
                    <Route path="/tiktok" exact>
                        <Tiktok />
                    </Route>
                    <Route path="/tiktok/detail">
                        <TiktokDetail />
                    </Route>
                </Switch>
            </div>
        </Draggable>
    );
};

export default TikTokPage;
