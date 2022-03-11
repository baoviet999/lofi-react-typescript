import Mode from "components/MenuOptions/Mode/Mode";
import Mood from "components/MenuOptions/Mood/Mood";
import Set from "components/MenuOptions/Set/Set";
import Template from "components/MenuOptions/Template/Template";
import React from "react";
import { Route, Switch } from "react-router-dom";

import './SideBar.scss'

const SideBar = () => {
    return (
        <div className="side-bar">
            <Switch>
                <Route path="/mood">
                    <Mood />
                </Route>
                <Route path="/mood/:id">
                    <Mood />
                </Route>
                <Route path="/template">
                    <Template />
                </Route>
                <Route path="/set">
                    <Set />
                </Route>
                <Route path="/mode">
                    <Mode />
                </Route>
            </Switch>
        </div>
    );
};

export default SideBar;
