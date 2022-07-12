import React from "react";
import {faEllipsisV, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import user from "../../../assets/user.jpeg"

class ClassroomUser extends React.Component {
    render() {
        return (
            <div className="classroom__user">
                <FontAwesomeIcon className="classroom__message" icon={faEnvelope}/>
                <div className="classroom__user-info">
                    <img className="classroom__user-avatar" src={user} alt="user"/>
                    <span className="classroom__user-name">John Johns</span>
                </div>
                <FontAwesomeIcon className="classroom__more" icon={faEllipsisV}/>
            </div>
        )
    }
}

export default ClassroomUser;