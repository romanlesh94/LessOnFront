import React from "react";
import back from '../../../assets/sign-back.jpg';

class SignupPage extends React.Component {
    render() {
        return (
            <div className="sign-wrapper">

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

                    <span className="sign-form__label">Full name</span>
                    <input className="sign-form__input" type="text" placeholder="Name.."/>

                    <span className="sign-form__label">Email</span>
                    <input className="sign-form__input" type="email" placeholder="Email.."/>

                    <span className="sign-form__label">Username</span>
                    <input className="sign-form__input" type="text" placeholder="Username.."/>

                    <span className="sign-form__label">Password</span>
                    <input className="sign-form__input" type="password" placeholder="Password.."/>

                    <span className="sign-form__label">Repeat password</span>
                    <input className="sign-form__input" type="password" placeholder="Repeat password.."/>

                    <div className="sign-buttons-wrapper">
                        <button className="button">Log in</button>
                        <button className="button button--active">Sign up</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignupPage;