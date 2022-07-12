import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import ILesson from "../../../models/lesson-interface";
import IUnit from "../../../models/unit-interface";
import api from "../../../services/api";
import {connect} from "react-redux";
import Unit from "./unit";
import {hideSpinnerActionCreator, showSpinnerActionCreator} from "../../../redux/spinnerReducer";
import {updateCurrentLessonAC} from "../../../redux/lesson-reducer";
import {debuglog} from "util";

interface ILessonMiniState {
    isDeleteActive: number | boolean
}

class LessonMini extends React.Component<{
    unit: IUnit,
    handleAddLessonCallback: (lesson: ILesson, unitId: number) => void,
    handleDeleteLessonCallback: (lesson: ILesson) => void,
    hideSpinner: () => void,
    showSpinner: () => void,
    updateCurrentLesson: (id: number) => void,
}> {

    state: ILessonMiniState = {
        isDeleteActive: false,
    }

    addLesson = () => {

        this.props.showSpinner();

        const lessons = this.props.unit.lessons;

        const lessonNumber = lessons? lessons.length + 1 : 1;

        const lesson: ILesson = {
            unitId: this.props.unit.id,
            id: 0,
            number: lessonNumber,
            cardsets: [],
        }

        api.post(`https://localhost:5001/add-lesson`, lesson)
            .then(res => {
                this.props.handleAddLessonCallback(lesson, lesson.unitId);
                this.props.hideSpinner();
            });
    }

    openDeleteIcon = (lessonId: number) => {
        this.setState({isDeleteActive: lessonId});
    }

    closeDeleteIcon = () => {
        this.setState({isDeleteActive: false});
    }

    deleteLesson = (lessonId: number) => {
        this.props.showSpinner();
        const url = `https://localhost:5001/delete-lesson?id=${lessonId}`
        api.delete(url).then(res => {
            this.props.handleDeleteLessonCallback(res.data);
            this.props.hideSpinner();
        });
    }

    updateCurrentLesson = (id: number) => {
        this.props.updateCurrentLesson(id);
    }

    render () {
        return (
            <div className="lessons">
                {
                    this.props.unit.lessons?.map((lesson: ILesson) =>

                        <div
                            key={lesson.id} className="lesson-xs-wrapper"
                            onClick={() => this.updateCurrentLesson(lesson.id)}
                            onMouseEnter={() => {this.openDeleteIcon(lesson.id)}} onMouseLeave={this.closeDeleteIcon}
                        >
                            <NavLink to={`/units/lesson/${lesson.id}`} className="lesson-xs">
                                <span className="lesson__caption">Lesson</span>
                                <span className="lesson__number">{lesson.number}</span>
                            </NavLink>

                            {
                                this.state.isDeleteActive === lesson.id &&
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className={this.state.isDeleteActive ? "lesson__delete" : "lesson__delete--inactive"}
                                    onClick={() => this.deleteLesson(lesson.id)}
                                />
                            }

                        </div>

                    )
                }
                <button
                    className="lesson__add-btn"
                    onClick={this.addLesson}
                >
                    <FontAwesomeIcon icon={faPlus} className="lesson__add-btn-icon"/>
                </button>
            </div>
        )
    }
}

export default LessonMini;

/*
const mapStateToProps = (state: any) => {
    return {
        currentLessonId: state.currentLessonId,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateCurrentLesson: (id: number) => {
            dispatch(updateCurrentLessonAC(id));
        },
    }
}

connect(mapStateToProps, mapDispatchToProps) (LessonMini);*/
