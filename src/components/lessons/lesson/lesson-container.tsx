import {hideSpinnerActionCreator, showSpinnerActionCreator} from "../../../redux/spinnerReducer";
import {updateCurrentLessonAC} from "../../../redux/lesson-reducer";
import {connect} from "react-redux";
import Lesson from "./lesson";

const mapStateToProps = (state: any) => {
    return {
        isSpinnerActive: state.isSpinnerActive,
        currentLessonId: state.currentLessonId,
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

const LessonContainer = connect(mapStateToProps, mapDispatchToProps) (Lesson);

export default LessonContainer;