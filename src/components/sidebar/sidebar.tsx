import React from 'react';


class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar__list">
                    <li className="sidebar__item">My lessons</li>
                    <li className="sidebar__item">My classroom</li>
                    <li className="sidebar__item">My articles</li>
                    <li className="sidebar__item">Browse</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;