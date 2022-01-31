import React from 'react';
import Menu from '../components/menu/Menu';
import Sidebar from "./sidebar/sidebar";


class HomePage extends React.Component {
    render() {
        return (
            <div className="home-wrapper">
                <Menu/>
                <Sidebar/>
            </div>
        )
    }
}

export default HomePage;