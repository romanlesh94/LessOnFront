import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddExerciseWindow from "./add-exercise-window";
import Cardset from "./cardset/cardset";
import {getLessonService} from "../../../services/lesson-service";
import ILesson from "../../../models/lesson-interface";
import ICardset from "../../../models/cardset-interface";

interface ILessonState {
    isAddExerciseFormOpen: boolean,
    lesson: ILesson,
    id: number,
}

class Lesson extends React.Component<{
    currentLessonId: number,
    updateCurrentLesson: (id: number) => void,
}>{

    state: ILessonState = {
        isAddExerciseFormOpen: false,
        id: 0,
        lesson: {
            id: 0,
            unitId: 0,
            number: 0,
            cardsets: [],
        }
    }

    componentDidMount() {
        let id = this.props.currentLessonId;
        this.props.updateCurrentLesson(id);
        console.log(id);
        getLessonService(id).then(lesson => {
            this.setState({lesson});
        })
    }


    addExerciseFormToggle = () => {
        this.setState({isAddExerciseFormOpen: !this.state.isAddExerciseFormOpen});
    }

    addOutsideClickCallback = (value: boolean) => {
        this.setState({isAddExerciseFormOpen: value})
    }

    render() {
        return (
            <div className="lesson">
                {
                    this.state.lesson.cardsets?.map((cardset: ICardset) =>
                        <Cardset cardset={cardset}/>
                    )
                }
                <button onClick={this.addExerciseFormToggle} className="add-button">
                    <FontAwesomeIcon icon={faPlus} className="add-button__plus"/>
                </button>
                <AddExerciseWindow
                    isAddExerciseFormOpen={this.state.isAddExerciseFormOpen}
                    addOutsideClickCallback={this.addOutsideClickCallback}
                    lessonId={this.props.currentLessonId}
                />
            </div>
        )
    }
}

export default Lesson;
