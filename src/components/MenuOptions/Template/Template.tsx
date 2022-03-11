import { useAppDispatch, useAppSelector } from 'App/store'
import { selectThemeVideo, themeAction } from 'components/Navbar/themeSlice'
import ThemeSence from 'fearture/Theme/components/ThemeSence/ThemeSence';
import Theme from 'fearture/Theme/Theme';
import { ThemeChosse, ThemeData } from 'model/common';
import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';

const Template = () => {
  const [themes, setTheme] = useState<ThemeData>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleChangeSet = (theme: ThemeData) => {
      setTheme(theme);
      console.log(theme);
      history.push("/template/sence");
  };
  const handleChangeTheme = (data: ThemeChosse) => {
      dispatch(themeAction.setNewTheme(data));
  };
  
  return (
      <>
          <Switch>
              <Route path="/template" exact>
                  <Theme name='Favorite Theme' onChangeSet={handleChangeSet} />
              </Route>
              <Route path="/template/sence">
                  <ThemeSence path='template' onChangeTheme={handleChangeTheme} theme={themes} />
              </Route>
          </Switch>
      </>
  );
}

export default Template