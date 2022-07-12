import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEllipsisV, faEnvelope, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import AddUser from "./add-user";
import IUser from "../../../models/user-interface";

class Classroom extends React.Component {

    state = {
        isAddUserOpen: false,
        users: [
            {
                id: 1,
                name: "Anastasia",
                email: "anastasia@gmail.com",
                avatar: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            },
            {
                id: 2,
                name: "Olga",
                email: "olga@gmail.com",
                avatar: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            },
        ]
    }

    addUserToggle = () => {
        this.setState({isAddUserOpen: !this.state.isAddUserOpen});
    }

    addOutsideClickCallback = (value: boolean) => {
        this.setState({isAddUserOpen: value})
    }

    render() {
        return (
            <div className="classroom">
                <div className="classroom__header">
                    <span className="classroom__title">My Classroom Name</span>
                    <div className="classroom__buttons">
                        <FontAwesomeIcon onClick={this.addUserToggle} className="classroom__plus-button"
                                         icon={faPlusSquare}/>
                        <FontAwesomeIcon className="classroom__menu-button" icon={faBars}/>
                    </div>
                </div>
                <AddUser
                    isAddUserOpen={this.state.isAddUserOpen}
                    addOutsideClickCallback={this.addOutsideClickCallback}
                />
                <div className="classroom__body">
                    {
                        this.state.users.map((user: IUser) =>
                            <div className="classroom__user">
                                <FontAwesomeIcon className="classroom__message" icon={faEnvelope}/>
                                <div className="classroom__user-info">
                                    <img className="classroom__user-avatar" src={user.avatar} alt="user"/>
                                    <span className="classroom__user-name">{user.name}</span>
                                </div>
                                <FontAwesomeIcon className="classroom__more" icon={faEllipsisV}/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Classroom;