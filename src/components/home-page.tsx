import React from 'react';
import Menu from './menu/Menu';
import Sidebar from "./sidebar/sidebar";


class HomePage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="menu-container">
                    <Menu/>
                </div>
                <div className="sidebar-container">
                    <Sidebar/>
                </div>
                <div className="container">

                </div>
            </div>
        )
    }
}

export default HomePage;