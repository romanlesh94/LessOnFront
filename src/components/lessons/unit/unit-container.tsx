import React from "react";
import {hideSpinnerActionCreator, showSpinnerActionCreator} from "../../../redux/spinnerReducer";
import {connect} from "react-redux";
import Unit from "./unit";
import {updateCurrentLessonAC} from "../../../redux/lesson-reducer";

const mapStateToProps = (state: any) => {
    return {
        isSpinnerActive: state.isSpinnerActive,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        showSpinner: () => {
            dispatch(showSpinnerActionCreator());
        },
        hideSpinner: () => {
            dispatch(hideSpinnerActionCreator());
        },
        updateCurrentLesson: (id: number) => {
            dispatch(updateCurrentLessonAC(id));
        }
    }
}

const UnitContainer = connect(mapStateToProps, mapDispatchToProps) (Unit);

export default UnitContainer;