import React from "react";
import back from '../../../assets/sign-back.jpg';
import {NavLink} from "react-router-dom";
import logo from '../../../assets/lesson-logo.svg';
import AuthService from "../../../services/auth-service";

class SignupPage extends React.Component {

    state = {
        login: '',
        password: '',
        email: '',
        country: '',
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({[name]: value});
    }

    handleSignup = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const login = this.state.login;
        const password = this.state.password;
        const email = this.state.email;
        const country = this.state.country;
        AuthService.signup(login, password, email, country).then(
            () => {
                console.log("you have signed up");
            }
        )
    }

    render() {
        return (
            <div className="sign-wrapper">

                <div className="navbar">
                    <ul className="navbar-list">
                        <li className="logo"><img src={logo} alt="logo"/></li>
                        <li><NavLink to="/log-in">Log in</NavLink></li>
                        <li><NavLink to="/sign-up">Sign up</NavLink></li>
                    </ul>
                </div>

                <div className="sign-cover">
                    <h1 className="sign-cover__title">Enter your personal data</h1>
                    <p className="sign-cover__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A accusamus aperiam atque commodi cumque dolores, ea est eveniet fugiat
                        in maxime nesciunt officia quae, quasi repellat tempore veniam voluptates!
                        Repellat.
                    </p>
                    <img className="sign-cover__image" src={back} alt=""/>
                </div>

                <div className="sign-form">
                    <h2 className="sign-form__title">Sign Up</h2>

                    <span className="sign-form__label">Login</span>
                    <input
                        className="sign-form__input"
                        type="text"
                        placeholder="Login.."
                        name="login"
                        onChange={this.handleChange}
                    />

                    <span className="sign-form__label">Password</span>
                    <input
                        className="sign-form__input"
                        type="password"
                        placeholder="Password.."
                        name="password"
                        onChange={this.handleChange}
                    />

                    <span className="sign-form__label">Email</span>
                    <input
                        className="sign-form__input"
                        type="email" placeholder="Email.."
                        onChange={this.handleChange}
                        name="email"
                    />

                    <span className="sign-form__label">Country</span>
                    <input
                        className="sign-form__input"
                        type="text"
                        placeholder="Country.."
                        onChange={this.handleChange}
                        name="country"
                    />

                    <span className="sign-form__label inactive">Repeat password</span>
                    <input className="sign-form__input inactive" type="password" placeholder="Repeat password.."/>

                    <div className="sign-buttons-wrapper">
                        <button className="button button--auth">Log in</button>
                        <button
                            className="button button--auth button--active"
                            onClick={this.handleSignup}
                        >
                            Sign up
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignupPage;