import { useAppDispatch } from "App/store";
import { themeAction } from "components/Navbar/themeSlice";
import ThemeSence from "fearture/Theme/components/ThemeSence/ThemeSence";
import Theme from "fearture/Theme/Theme";
import { ThemeChosse, ThemeData } from "model/common";
import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

const Set = () => {
  const [themes, setTheme] = useState<ThemeData>()
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleChangeSet = (theme : ThemeData) => {
    setTheme(theme)
    console.log(theme)
    history.push('./set/sence')
  }
  const handleChangeTheme = (data: ThemeChosse) => {
    dispatch(themeAction.setNewTheme(data))
  }
    return (
        <>
            <Switch>
                <Route path="/set" exact>
                    <Theme name='Change Theme' onChangeSet={handleChangeSet} />
                </Route>
                <Route path="/set/sence">
                    <ThemeSence path='set' onChangeTheme={handleChangeTheme} theme={themes} />
                </Route>
            </Switch>
        </>
    );
};

export default Set;
