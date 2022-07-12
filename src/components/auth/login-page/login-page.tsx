import React from "react";
import back from "../../../assets/login-back.jpg";
import {NavLink} from "react-router-dom";
import logo from "../../../assets/lesson-logo.svg";
import AuthService from "../../../services/auth-service";

class LoginPage extends React.Component {

    state = {
        login: '',
        password: '',
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({[name]: value});
    }

    handleLogin = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const login = this.state.login;
        const password = this.state.password;
        AuthService.login(login, password).then(
            () => {
                console.log("you have logged in");
            }
        )
    }



    render() {
        return (

            <div className="login-wrapper">

                <div className="navbar">
                    <ul className="navbar-list">
                        <li className="logo"><img src={logo} alt="logo"/></li>
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

                <form className="login-form">
                    <h2 className="login-form__title">Log in</h2>

                    <span className="login-form__label">Username</span>
                    <input
                        className="login-form__input"
                        type="text"
                        placeholder="Username.."
                        name="login"
                        onChange={this.handleChange}
                    />

                    <span className="login-form__label">Password</span>
                    <input
                        className="login-form__input"
                        type="password"
                        placeholder="Password.."
                        name="password"
                        onChange={this.handleChange}
                    />

                    <div className="buttons-wrapper">
                        <button
                            className="button button--auth"
                        >
                            Sign up
                        </button>
                        <button
                            className="button button--auth button--active"
                            onClick={this.handleLogin}
                            key="button-login"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;