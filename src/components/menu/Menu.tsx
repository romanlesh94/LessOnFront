import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/lesson-logo.svg";
import user from "../../assets/user.jpeg";


class Menu extends React.Component {
    render() {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                    <input type="text" className="search" placeholder="Search..."/>
                    <div className="user">
                        <div className="user__text">
                            <span className="user__name">John Johns</span>
                            <span className="user__role">Teacher</span>
                        </div>
                        <img src={user} alt="user" className="user__avatar"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Menu;