import React from 'react';
import './App.css';
import LoginPage from "./components/auth/login-page/login-page";
import SignupPage from "./components/auth/signup-page/signup-page";
import HomePage from "./components/home-page";
import {Route, Switch} from "react-router-dom";

function App() {

    return (
            <Switch>
                <Route path="/log-in">
                    <LoginPage/>
                </Route>

                <Route path="/sign-up">
                    <SignupPage/>
                </Route>

                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
    );
}

export default App;

