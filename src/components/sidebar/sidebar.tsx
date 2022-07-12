import React from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen, faCaretRight, faGlobe, faNewspaper, faUserCircle, faUsers} from "@fortawesome/free-solid-svg-icons";


class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__list">

                    <NavLink to="/units" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <span className="sidebar__text">My lessons</span>
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faCaretRight} className="sidebar__arrow"/>
                        </div>
                    </NavLink>

                    <NavLink to="/classroom" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <span className="sidebar__text">My classroom</span>
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faCaretRight} className="sidebar__arrow"/>
                        </div>
                    </NavLink>

                    <NavLink to="/articles" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faNewspaper} />
                        </div>
                        <span className="sidebar__text">My articles</span>
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faCaretRight} className="sidebar__arrow"/>
                        </div>
                    </NavLink>

                    <NavLink to="/browse" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <span className="sidebar__text">Browse</span>
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faCaretRight} className="sidebar__arrow"/>
                        </div>
                    </NavLink>

                    <NavLink to="/profile" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <span className="sidebar__text">Profile</span>
                        <div className="sidebar__icon-wrapper">
                            <FontAwesomeIcon icon={faCaretRight} className="sidebar__arrow"/>
                        </div>
                    </NavLink>

                </div>
            </div>
        )
    }
}

export default Sidebar;