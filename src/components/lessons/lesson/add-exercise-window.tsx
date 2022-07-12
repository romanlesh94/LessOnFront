import React from "react";
import AddCardsetForm from "./cardset/add-cardset-form";

class AddExerciseWindow extends React.Component <{
    isAddExerciseFormOpen: boolean,
    addOutsideClickCallback: (value: boolean) => void,
    lessonId: number,
}> {

    state = {
        isAddCardsetFormOpen: false,
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    windowRef = React.createRef<HTMLDivElement>();

    handleClickOutside = (event: any) => {
        if (this.windowRef.current !== null && this.windowRef.current && !this.windowRef.current.contains(event.target)) {
            this.props.addOutsideClickCallback(false);
        }
    };

    addCardsetFormToggle = () => {
        this.setState({isAddCardsetFormOpen: !this.state.isAddCardsetFormOpen});
    }

    addOutsideClickCallback = (value: boolean) => {
        this.setState({isAddCardsetFormOpen: value})
    }

    render() {
        return(
            <div ref={this.windowRef} className={this.props.isAddExerciseFormOpen ? "add-exercise" : "add-exercise--is-closed"}>
                <span className="add-exercise__title">What exercise would you like to add?</span>
                <div className="add-exercise__button-wrapper">
                    <button
                        className="add-exercise__button button"
                        onClick={this.addCardsetFormToggle}
                    >
                        Cards
                    </button>
                    <button className="add-exercise__button button">Reading</button>
                    <button className="add-exercise__button button">Test</button>
                </div>
                <AddCardsetForm
                    lessonId={this.props.lessonId}
                    isAddCardsetFormOpen={this.state.isAddCardsetFormOpen}
                    addOutsideClickCallback={this.addOutsideClickCallback}
                />
            </div>
        )
    }
}

export default AddExerciseWindow;