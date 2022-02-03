import React from 'react';
import './App.css';
import LoginPage from "./components/auth/login-page/login-page";
import SignupPage from "./components/auth/signup-page/signup-page";
import HomePage from "./components/home-page";
import UnitsPage from "./components/lessons/units-page";
import {Switch, Route} from "react-router-dom";
import LessonPage from "./components/lessons/lesson/lesson-page";


function App() {
    return (

            <Switch>
                <Route path="/log-in">
                    <LoginPage/>
                </Route>

                <Route path="/sign-up">
                    <SignupPage/>
                </Route>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/units">
                    <UnitsPage/>
                </Route>

                <Route exact path="/units/l1">
                    <LessonPage/>
                </Route>

                <Route path="/classroom">
                    <HomePage/>
                </Route>

                <Route path="/articles">
                    <HomePage/>
                </Route>

                <Route path="/browse">
                    <HomePage/>
                </Route>
            </Switch>
    );
}

export default App;
