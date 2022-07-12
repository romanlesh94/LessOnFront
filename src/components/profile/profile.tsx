import React from "react";
import user from "../../assets/user.jpeg";

class Profile extends React.Component {

    render () {
        return (
            <div className="profile">
                <div className="profile__photo-wrapper">
                    <img src={user} alt="user-avatar" className="profile__photo"/>
                </div>
                <div className="profile__info">
                    <div className="profile__info-box">
                        <div className="profile__info-field">
                            <span className="profile__label">Name:</span>
                            <span className="profile__text">{localStorage.getItem("username")}</span>
                        </div>
                        <div className="profile__info-field">
                            <span className="profile__label">Email:</span>
                            <span className="profile__text">{localStorage.getItem("email")}</span>
                        </div>
                        <div className="profile__info-field">
                            <span className="profile__label">Country:</span>
                            <span className="profile__text">{localStorage.getItem("country")}</span>
                        </div>
                        <div className="profile__info-field">
                            <span className="profile__label">Units created:</span>
                            <span className="profile__text">1</span>
                        </div>
                    </div>
                    <div className="profile__button-wrapper">
                        <button className="profile__button button--active">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;