import store from "App/store";
import NotFound from "components/NotFound/NotFound";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import BackgroundProvider from "./components/Navbar/backgroundContext";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <BackgroundProvider>
                    <Switch>
                        <Route path="/">
                            <App />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </BackgroundProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
