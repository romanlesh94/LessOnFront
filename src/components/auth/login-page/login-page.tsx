import React from "react";
import back from "../../../assets/login-back.jpg";
import {NavLink} from "react-router-dom";
import logo from "../../../assets/lesson-logo.svg";

class LoginPage extends React.Component {
    render() {
        return (

            <div className="login-wrapper">

                <div className="navbar">
                    <ul className="navbar-list">
                        <li className="logo"><NavLink to="/"><img src={logo} alt="logo"/></NavLink></li>
                        <li><NavLink to="/log-in">Log in</NavLink></li>
                        <li><NavLink to="/sign-up">Sign up</NavLink></li>
                    </ul>
                </div>

                <div className="login-cover">
                    <h1 className="login-cover__title">Log in to your account</h1>
                    <p className="login-cover__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A accusamus aperiam atque commodi cumque dolores, ea est eveniet fugiat
                        in maxime nesciunt officia quae, quasi repellat tempore veniam voluptates!
                        Repellat.
                    </p>
                    <img className="login-cover__image" src={back} alt=""/>
                </div>

                <div className="login-form">
                    <h2 className="login-form__title">Log in</h2>

                    <span className="login-form__label">Username</span>
                    <input className="login-form__input" type="text" placeholder="Username.."/>

                    <span className="login-form__label">Password</span>
                    <input className="login-form__input" type="password" placeholder="Password.."/>

                    <div className="buttons-wrapper">
                        <button className="button">Sign up</button>
                        <button className="button button--active">Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;