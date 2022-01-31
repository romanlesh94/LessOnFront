import React from 'react';
import './App.css';
import LoginPage from "./components/auth/login-page/login-page";
import SignupPage from "./components/auth/signup-page/signup-page";
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./components/home-page";

function App() {
    return (
        <Router>

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

        </Router>
    );
}

export default App;
