import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Menu from './menu/Menu';
import Sidebar from "./sidebar/sidebar";
import Lesson from "./lessons/lesson/lesson";
import Cards from './lessons/exercises/cards';
import Classroom from "./lessons/classroom/classroom";
import Profile from "./profile/profile";
import UnitContainer from "./lessons/unit/unit-container";
import LessonContainer from "./lessons/lesson/lesson-container";


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
                    <Switch>
                        <Route exact path="/units">
                            <UnitContainer/>
                        </Route>

                        <Route path="/units/lesson">
                            <LessonContainer />
                        </Route>

                        <Route path="/units/l1/set1">
                            <Cards/>
                        </Route>

                        <Route path="/classroom">
                            <Classroom/>
                        </Route>

                        <Route path="/articles">
                            <Cards/>
                        </Route>

                        <Route path="/browse">
                            <Cards/>
                        </Route>

                        <Route path="/profile">
                            <Profile/>
                        </Route>

                    </Switch>
                </div>
            </div>
        )
    }
}

export default HomePage;