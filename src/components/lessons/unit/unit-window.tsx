import React from "react";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UpdateUnitForm from "./update-unit-form";
import IUnit from "../../../models/unit-interface";
import DeleteUnitWindow from "./delete-unit-window";
import ILesson from "../../../models/lesson-interface";

class UnitWindow extends React.Component

    <{
        unitId: number,
        unitName: string,
        unitDescription: string,
        unitImagePath: string,
        handleSubmitCallback: (unit: IUnit) => void,
        lessons: Array<ILesson>,
    }> {

    state = {
        isModalOpen: false,
        isFormOpen: false,
        isDeleteOpen: false,
    }

    windowToggle = () => {
        this.setState({isModalOpen: !this.state.isModalOpen});
        this.setState({isFormOpen: false});
    };

    formToggle = () => {
        this.setState({isFormOpen: !this.state.isFormOpen});
    };

    deleteWindowToggle = () => {
        this.setState({isDeleteOpen: !this.state.isDeleteOpen});
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    windowRef = React.createRef<HTMLDivElement>();

    handleClickOutside = (event: any) => {
        if (this.windowRef.current !== null && this.windowRef.current && !this.windowRef.current.contains(event.target)) {
            this.setState({isModalOpen: false});
            this.setState({isFormOpen: false});
            this.setState({isDeleteOpen: false});
        }
    };

    deleteUnitCallback = (value: boolean) => {
        this.setState({isDeleteOpen: value});
        this.setState({isModalOpen: value});
    };

    updateUnitCallback = (value: boolean) => {
        this.setState({isModalOpen: value});
        this.setState({isFormOpen: value});
    };

    render() {
        return (
            <div className="unit__modal" ref={this.windowRef}>
                <FontAwesomeIcon onClick={this.windowToggle} icon={faEllipsisV} className="unit__more"/>
                <div className={this.state.isModalOpen ? "unit__window" : "unit__window--is-closed"}>
                    <div className="unit__buttons-wrapper">
                        <button onClick={this.deleteWindowToggle} className="unit__button">Remove unit</button>
                        <button onClick={this.formToggle} className="unit__button">Update unit</button>
                    </div>
                </div>
                <UpdateUnitForm
                    isFormOpen={this.state.isFormOpen}
                    unitId={this.props.unitId}
                    unitName={this.props.unitName}
                    unitDescription={this.props.unitDescription}
                    unitImagePath={this.props.unitImagePath}
                    handleSubmitCallback={this.props.handleSubmitCallback}
                    updateUnitCallback={this.updateUnitCallback}
                    lessons={this.props.lessons}
                />
                <DeleteUnitWindow
                    isDeleteOpen={this.state.isDeleteOpen}
                    unitId={this.props.unitId}
                    deleteUnitCallback={this.deleteUnitCallback}
                />
            </div>
        )
    }
}

export default UnitWindow;