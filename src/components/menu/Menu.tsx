import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/lesson-logo.svg";
import user from "../../assets/user.jpeg";
import ProfileMini from "./profile-mini";


class Menu extends React.Component {

    state = {
        isProfileActive: false,
    }

    handleProfile = () => {
        this.setState({isProfileActive: !this.state.isProfileActive});
    }

    profileOutsideClickCallback = () => {
        this.setState({isProfileActive: false});
    }

    render() {
        return (
            <div  className="menu-wrapper">
                <div className="menu">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <input type="text" className="search" placeholder="Search..."/>
                    <div className="user-menu">
                        <div className="user-menu__text">
                            <span className="user-menu__name">
                                {localStorage.getItem("username")}
                            </span>
                            <span className="user-menu__role">Teacher</span>
                        </div>
                        <img onClick={this.handleProfile} src={user} alt="user-menu" className="user-menu__avatar"/>
                    </div>
                </div>
                <ProfileMini
                    isActive={this.state.isProfileActive}
                    profileOutsideClickCallback={this.profileOutsideClickCallback}
                />
            </div>

        )
    }
}

export default Menu;