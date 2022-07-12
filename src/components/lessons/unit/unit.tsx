import React from "react";
import img from '../../../assets/unit-image.jpg';
import IUnit from '../../../models/unit-interface'
import {getUnitsService} from '../../../services/unit-service'
import UnitWindow from "./unit-window";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddUnitForm from "./add-unit-form";
import LessonMini from "./lesson-mini";
import ILesson from "../../../models/lesson-interface";
import Spinner from "../../spinner/spinner";

interface IUnitState {
    units: Array<IUnit>,
    isLoading: boolean,
    isAddUnitFormOpen: boolean,
}

class Unit extends React.Component <{
    isSpinnerActive: boolean,
    showSpinner: () => void,
    hideSpinner: () => void,
    updateCurrentLesson: (id: number) => void,
}>{

    state: IUnitState = {
        units: [],
        isLoading: true,
        isAddUnitFormOpen: false,
    }

    componentDidMount() {
        this.props.showSpinner();
        getUnitsService().then(units => {
            this.setState({units});
            this.props.hideSpinner();
        });
    }

    handleSubmitCallback = (unit: IUnit) => {
        const prevUnitIndex = this.state.units.findIndex((u: IUnit) => u.id === unit.id);

        if (prevUnitIndex === -1) {
            return;
        }

        const prevUnits = this.state.units;
        prevUnits[prevUnitIndex] = unit;

        this.setState({units: [...prevUnits]});
    }

    handleAddUnitCallback = (unit: IUnit) => {
        const currentUnits = this.state.units;
        currentUnits.push(unit);
        console.log(unit);
        this.setState({units: [...currentUnits]})
        this.setState({isAddUnitFormOpen: false})
    }

    handleAddLessonCallback = (lesson: ILesson, unitId: number) => {
        this.props.showSpinner();
        const currentUnits = this.state.units;
        const unitIndex = currentUnits.findIndex((u:IUnit) => u.id === unitId);
        const unitToUpdate = this.state.units[unitIndex];
        unitToUpdate.lessons.push(lesson);
        this.setState({units: [...currentUnits]})
    }

    handleDeleteLessonCallback = (lesson: ILesson) => {
        const currentUnits = this.state.units;
        const unitToUpdate = currentUnits.find((u:IUnit) => u.id === lesson.unitId);
        const lessonIndex = unitToUpdate?.lessons.findIndex((l:ILesson) => l.id === lesson.id);
        unitToUpdate?.lessons.splice(lessonIndex!, 1);
        this.setState({units: [...currentUnits]});
    }

    addUnitFormToggle = () => {
        this.setState({isAddUnitFormOpen: !this.state.isAddUnitFormOpen});
    }

    addOutsideClickCallback = (value: boolean) => {
        this.setState({isAddUnitFormOpen: value})
    }

    render() {
        return (
            <div className="unit">
                <Spinner isLoading={this.props.isSpinnerActive}/>
                {
                    this.state.units.map((unit: IUnit) =>
                        <div className="unit-wrapper" key={unit.id}>
                            <div className="unit__cover">
                                <div className="unit__number-box">
                                    <span className="unit__number">1</span>
                                </div>
                                <div className="unit__image-box">
                                    <img src={unit.imagePath} alt="image" className="unit__image"/>
                                </div>
                                <div className="unit__info">
                                    <h2 className="unit__name">{unit.name}</h2>
                                    <p className="unit__text">{unit.description}</p>
                                </div>
                                <UnitWindow
                                    unitId={unit.id}
                                    unitName={unit.name}
                                    unitDescription={unit.description}
                                    unitImagePath={unit.imagePath}
                                    lessons={unit.lessons}
                                    handleSubmitCallback={this.handleSubmitCallback}
                                />
                            </div>
                            <LessonMini
                                unit={unit}
                                handleAddLessonCallback={this.handleAddLessonCallback}
                                handleDeleteLessonCallback={this.handleDeleteLessonCallback}
                                hideSpinner={this.props.hideSpinner}
                                showSpinner={this.props.showSpinner}
                                updateCurrentLesson={this.props.updateCurrentLesson}
                            />
                        </div>
                    )
                }
                <button onClick={this.addUnitFormToggle} className="add-button">
                    <FontAwesomeIcon icon={faPlus} className="add-button__plus"/>
                </button>
                <AddUnitForm
                    isAddUnitFormOpen={this.state.isAddUnitFormOpen}
                    handleAddUnitCallback={this.handleAddUnitCallback}
                    addOutsideClickCallback={this.addOutsideClickCallback}
                    hideSpinner={this.props.hideSpinner}
                    showSpinner={this.props.showSpinner}
                />
            </div>
        )
    }
}

export default Unit;