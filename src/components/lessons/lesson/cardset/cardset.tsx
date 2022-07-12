import React from "react";
import cover01 from "../../../../assets/lesson-1.jpg";
import LessonWindow from "../lesson-window";
import {NavLink} from "react-router-dom";
import ICardset from "../../../../models/cardset-interface";

class Cardset extends React.Component <{
    cardset: ICardset;
}>{
    render(){
        return(
            <NavLink to="/units/l1/set1" className="lesson__exercise">
                <div>
                    <div className="lesson__image-box">
                        <img src={cover01} alt="" className="lesson__image"/>
                        <div className="lesson__image-top"></div>
                    </div>
                    <div className="lesson__info">
                        <h3 className="lesson__name">{this.props.cardset.name}</h3>
                    </div>
                    <LessonWindow />
                </div>
            </NavLink>
        )
    }
}

export default Cardset;