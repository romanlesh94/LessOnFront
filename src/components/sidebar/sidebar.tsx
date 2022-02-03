import React from 'react';
import lessonsIcon from '../../assets/lessons-icon.svg';
import classroomIcon from '../../assets/classroom-icon.svg';
import articlesIcon from '../../assets/articles-icon.svg';
import browseIcon from '../../assets/browse-icon.svg';
import arrow from '../../assets/arrow-closed.svg';
import {NavLink} from "react-router-dom";


class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__list">

                    <NavLink to="/units" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <img src={lessonsIcon} alt="lessons" className="sidebar__icon"/>
                        </div>
                        <span className="sidebar__text">My lessons</span>
                        <div className="sidebar__icon-wrapper">
                            <img src={arrow} alt="open" className="sidebar__arrow sidebar__arrow--closed"/>
                        </div>
                    </NavLink>

                    <NavLink to="/classroom" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <img src={classroomIcon} alt="classroom" className="sidebar__icon"/>
                        </div>
                        <span className="sidebar__text">My classroom</span>
                        <div className="sidebar__icon-wrapper">
                            <img src={arrow} alt="open" className="sidebar__arrow sidebar__arrow--closed"/>
                        </div>
                    </NavLink>

                    <NavLink to="/articles" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <img src={articlesIcon} alt="articles" className="sidebar__icon"/>
                        </div>
                        <span className="sidebar__text">My articles</span>
                        <div className="sidebar__icon-wrapper">
                            <img src={arrow} alt="open" className="sidebar__arrow sidebar__arrow--closed"/>
                        </div>
                    </NavLink>

                    <NavLink to="/browse" className="sidebar__link" activeClassName="sidebar__link--active">
                        <div className="sidebar__icon-wrapper">
                            <img src={browseIcon} alt="browse" className="sidebar__icon"/>
                        </div>
                        <span className="sidebar__text">Browse</span>
                        <div className="sidebar__icon-wrapper">
                            <img src={arrow} alt="open" className="sidebar__arrow sidebar__arrow--closed"/>
                        </div>
                    </NavLink>

                </div>
            </div>
        )
    }
}

export default Sidebar;