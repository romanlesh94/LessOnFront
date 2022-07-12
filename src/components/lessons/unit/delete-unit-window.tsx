import React from "react";
import api from "../../../services/api";

class DeleteUnitWindow extends React.Component

    <{
        isDeleteOpen: boolean,
        unitId: number,
        deleteUnitCallback: (value: boolean) => void,
    }> {

    onYesClick = () => {
        const url = `https://localhost:5001/delete-unit?id=${this.props.unitId}`
        api.delete(url).then(res => {
            this.props.deleteUnitCallback(false);
        });
    }

    onNoClick = () => {
        this.props.deleteUnitCallback(false);
    }

    render() {
        return (
            <div className={this.props.isDeleteOpen ? "unit__delete-window" : "unit__delete-window--is-closed"}>
                <span className="unit__delete-title">Are you sure you want to delete this unit?</span>
                <div className="unit__delete-buttons-wrapper">
                    <button onClick={this.onYesClick} className="unit__delete-btn button">Yes</button>
                    <button onClick={this.onNoClick} className="unit__delete-btn button">No</button>
                </div>
            </div>
        )
    }
}

export default DeleteUnitWindow;