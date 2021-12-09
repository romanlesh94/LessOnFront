import React from 'react';
import './App.css';
import LoginPage from "./components/auth/login-page/login-page";
import SignupPage from "./components/auth/signup-page/signup-page";
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>

            <div className="menu">
                <ul className="navbar">
                    <li className="logo"><Link to="/">Home</Link></li>
                    <li><Link to="/log-in">Log in</Link></li>
                    <li><Link to="/sign-up">Sign up</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path="/log-in">
                    <LoginPage/>
                </Route>
                <Route path="/sign-up">
                    <SignupPage/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
