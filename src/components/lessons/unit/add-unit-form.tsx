import React from "react";
import IAddUnit from "../../../models/unit-add-interface";
import IUnit from "../../../models/unit-interface";
import api from "../../../services/api";

class AddUnitForm extends React.Component<{
    isAddUnitFormOpen: boolean,
    handleAddUnitCallback: (unit: IUnit) => void,
    addOutsideClickCallback: (value: boolean) => void,
    hideSpinner: () => void,
    showSpinner: () => void,
}> {

    state = {
        name: '',
        description: '',
        imagePath: '',
        lessons: [],
    }

    handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (event: any) => {

        this.props.showSpinner();

        event.preventDefault();

        const unit: IAddUnit = {
            name: this.state.name,
            description: this.state.description,
            imagePath: this.state.imagePath,
            lessons: [],
        }

        api.post(`https://localhost:5001/add-unit`, unit)
            .then(res => {
                this.props.handleAddUnitCallback(res.data);
                this.props.hideSpinner();
            });
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    addUnitFormRef = React.createRef<HTMLDivElement>();

    handleClickOutside = (event: any) => {
        if (this.addUnitFormRef.current !== null
            && this.addUnitFormRef.current
            && !this.addUnitFormRef.current
                .contains(event.target)) {
            this.props.addOutsideClickCallback(false);
        }
    }

    render() {
        return (
            <div ref={this.addUnitFormRef}
                 className={this.props.isAddUnitFormOpen ? "unit__form-add" : "unit__form-add--closed"}>
                <form onSubmit={this.handleSubmit} className="unit__form-wrapper">
                    <label className="unit__label">
                        <span className="unit__form-title">Create a new unit!</span>
                        <input
                            name="name"
                            type="text"
                            className="unit__input"
                            placeholder="Name..."
                            onChange={this.handleChange}
                        />
                        <input
                            name="description"
                            type="text"
                            className="unit__input"
                            placeholder="Description..."
                            onChange={this.handleChange}
                        />
                        <input
                            name="imagePath"
                            type="text"
                            className="unit__input"
                            placeholder="Image path..."
                            onChange={this.handleChange}
                        />
                    </label>
                    <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className="button unit__submit">
                        Save changes
                    </button>
                </form>
            </div>
        )
    }
}

export default AddUnitForm;