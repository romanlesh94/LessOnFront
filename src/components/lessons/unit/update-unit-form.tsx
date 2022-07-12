import React from "react";
import IUnit from "../../../models/unit-interface";
import api from "../../../services/api";
import IUpdateUnit from "../../../models/update-unit-interface";
import ILesson from "../../../models/lesson-interface";

class UpdateUnitForm extends React.Component
    <{
        isFormOpen: boolean,
        unitId: number,
        unitName: string,
        unitDescription: string,
        unitImagePath: string,
        handleSubmitCallback: (unit: IUnit) => void,
        updateUnitCallback: (value: boolean) => void,
        lessons: Array<ILesson>,
    }> {

    state = {
        name: this.props.unitName,
        description: this.props.unitDescription,
        imagePath: this.props.unitImagePath,
        lessons: this.props.lessons,
    }

    handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const unit: IUnit = {
            id: this.props.unitId,
            name: this.state.name,
            description: this.state.description,
            imagePath: this.state.imagePath,
            lessons: this.state.lessons,
        }

        api.post(`https://localhost:5001/update-unit`, unit)
            .then(res => {
                this.props.handleSubmitCallback(res.data);
            })

        this.props.updateUnitCallback(false);

    }

    render() {
        return (
            <div className={this.props.isFormOpen ? "unit__form" : "unit__form--is-closed"}>
                <form onSubmit={this.handleSubmit} className="unit__form-wrapper">
                    <label className="unit__label">
                        <span className="unit__form-title">Update this unit!</span>
                        <input
                            name="name"
                            type="text"
                            className="unit__input"
                            placeholder="Name..."
                            onChange={this.handleChange}
                            defaultValue={this.props.unitName}
                        />
                        <input
                            name="description"
                            type="text"
                            className="unit__input"
                            placeholder="Description..."
                            onChange={this.handleChange}
                            defaultValue={this.props.unitDescription}
                        />
                        <input
                            name="imagePath"
                            type="text"
                            className="unit__input"
                            placeholder="Image path..."
                            onChange={this.handleChange}
                            defaultValue={this.props.unitImagePath}
                        />
                    </label>
                    <button type="submit" onClick={this.handleSubmit} className="button unit__submit">Save changes
                    </button>
                </form>
            </div>
        )
    }
}

export default UpdateUnitForm;