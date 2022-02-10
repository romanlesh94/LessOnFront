import React from "react";
import more from '../../../assets/more-icon-white.svg';
import cover01 from '../../../assets/lesson-1.jpg';
import cover02 from '../../../assets/lesson-2.jpg';
import cover03 from '../../../assets/lesson-3.jpg';
import {NavLink} from "react-router-dom";

class Lesson extends React.Component {
    render() {
        return (
            <div className="lesson" >
                <NavLink to="/units/l1/set1" className="lesson__exercise">
                    <div >
                        <div className="lesson__image-box">
                            <img src={cover01} alt="" className="lesson__image"/>
                            <div className="lesson__image-top"></div>
                        </div>
                        <div className="lesson__info">
                            <h3 className="lesson__name">Learn</h3>
                            <p className="lesson__text">Flashcards that will help you learn something new</p>
                        </div>
                        <img src={more} alt="" className="lesson__more"/>
                    </div>
                </NavLink>
                
                <div className="lesson__exercise">
                    <div className="lesson__image-box">
                        <img src={cover02} alt="" className="lesson__image"/>
                        <div className="lesson__image-top"></div>
                    </div>
                    <div className="lesson__info">
                        <h3 className="lesson__name">Practice</h3>
                        <p className="lesson__text">Flashcards that will help you learn something new</p>
                    </div>
                    <img src={more} alt="" className="lesson__more"/>
                </div>

                <div className="lesson__exercise">
                    <div className="lesson__image-box">
                        <img src={cover03} alt="" className="lesson__image"/>
                        <div className="lesson__image-top"></div>
                    </div>
                    <div className="lesson__info">
                        <h3 className="lesson__name">Read</h3>
                        <p className="lesson__text">Flashcards that will help you learn something new</p>
                    </div>
                    <img src={more} alt="" className="lesson__more"/>
                </div>

                <div className="lesson__exercise">
                    <div className="lesson__image-box">
                        <img src={cover03} alt="" className="lesson__image"/>
                        <div className="lesson__image-top"></div>
                    </div>
                    <div className="lesson__info">
                        <h3 className="lesson__name">Read</h3>
                        <p className="lesson__text">Flashcards that will help you learn something new</p>
                    </div>
                    <img src={more} alt="" className="lesson__more"/>
                </div>

                <div className="lesson__exercise">
                    <div className="lesson__image-box">
                        <img src={cover03} alt="" className="lesson__image"/>
                        <div className="lesson__image-top"></div>
                    </div>
                    <div className="lesson__info">
                        <h3 className="lesson__name">Read</h3>
                        <p className="lesson__text">Flashcards that will help you learn something new</p>
                    </div>
                    <img src={more} alt="" className="lesson__more"/>
                </div>

                <div className="lesson__exercise">
                    <div className="lesson__image-box">
                        <img src={cover03} alt="" className="lesson__image"/>
                        <div className="lesson__image-top"></div>
                    </div>
                    <div className="lesson__info">
                        <h3 className="lesson__name">Read</h3>
                        <p className="lesson__text">Flashcards that will help you learn something new</p>
                    </div>
                    <img src={more} alt="" className="lesson__more"/>
                </div>
            </div>
        )
    }
}

export default Lesson;