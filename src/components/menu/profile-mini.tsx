import React from "react";
import user from "../../assets/user.jpeg";
import AuthService from "../../services/auth-service";

class ProfileMini extends React.Component <{
    isActive: boolean,
    profileOutsideClickCallback: () => void,
}>{

    profileRef = React.createRef<HTMLImageElement>();

    handleClickOutside = (event: any) => {
        if (this.profileRef.current !== null
            && this.profileRef.current
            && !this.profileRef.current
                .contains(event.target)) {
            this.props.profileOutsideClickCallback();
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleLogout = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        AuthService.logout();
    }

    render (){
        return (
            <div ref={this.profileRef} className={this.props.isActive? "profile-mini" : "profile-mini--inactive"}>
                <img src={user} alt="user-avatar" className="profile-mini__photo"/>
                <span className="profile-mini__name">{localStorage.getItem("username")}</span>
                <span className="profile-mini__email">{localStorage.getItem("email")}</span>
                <button className="profile-mini__button button" onClick={this.handleLogout}>Sign out</button>
            </div>
        )
    }
}

export default ProfileMini;

