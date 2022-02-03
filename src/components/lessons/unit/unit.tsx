import React from "react";
import img from '../../../assets/unit-image.jpg';
import more from '../../../assets/more-icon.svg';
import {NavLink} from "react-router-dom";


class Unit extends React.Component {
    render() {
        return (
            <div className="unit">

                <div className="unit__cover">
                    <div className="unit__number-box">
                        <span className="unit__number">1</span>
                    </div>
                    <div className="unit__image-box">
                        <img src={img} alt="image" className="unit__image"/>
                    </div>
                    <div className="unit__info">
                        <h2 className="unit__name">Great Britain</h2>
                        <p className="unit__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi culpa enim natus necessitatibus provident, quo sit.
                            Amet culpa dolorem eaque excepturi laboriosam magni odit
                            qui repudiandae? Commodi impedit ipsa reiciendis.
                        </p>
                    </div>
                    <img src={more} alt="more" className="unit__more"/>
                </div>

                <div className="lessons">
                    <NavLink to="/units/l1">
                        <div className="lesson-xs">
                            <span className="lesson__caption">Lesson</span>
                            <span className="lesson__number">1</span>
                        </div>
                    </NavLink>
                    <NavLink to="/units/l1">
                        <div className="lesson-xs">
                            <span className="lesson__caption">Lesson</span>
                            <span className="lesson__number">2</span>
                        </div>
                    </NavLink>
                    <NavLink to="/units/l1">
                        <div className="lesson-xs">
                            <span className="lesson__caption">Lesson</span>
                            <span className="lesson__number">3</span>
                        </div>
                    </NavLink>
                </div>

            </div>
        )
    }
}

export default Unit;