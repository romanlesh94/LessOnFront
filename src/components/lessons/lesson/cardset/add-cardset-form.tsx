import React from "react";
import IAddCardset from "../../../../models/add-cardset-interface";
import api from "../../../../services/api";

class AddCardsetForm extends React.Component <{
    lessonId: number,
    isAddCardsetFormOpen: boolean,
    addOutsideClickCallback: (value: boolean) => void,
}>{

    state = {
        name: '',
        description: '',
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (event: any) => {
        debugger
        event.preventDefault();

        const cardset: IAddCardset = {
            name: this.state.name,
            lessonId: this.props.lessonId,
        }

        api.post(`https://localhost:5001/add-cardset`, cardset)
            .then(res => {
                debugger
                console.log(res.data);
            })
    }

    addCardsetFormRef = React.createRef<HTMLDivElement>();

    handleClickOutside = (event: any) => {
        if (this.addCardsetFormRef.current !== null
            && this.addCardsetFormRef.current
            && !this.addCardsetFormRef.current
                .contains(event.target)) {
            this.props.addOutsideClickCallback(false);
        }
    }

    render(){
        return(
            <div
                ref={this.addCardsetFormRef}
                className={this.props.isAddCardsetFormOpen ? "cardset__form-add" : "cardset__form-add--closed"}
            >
                <form className="cardset__form-wrapper">
                    <span className="cardset__form-title">Create a new cardset!</span>
                    <input
                        name="name"
                        type="text"
                        className="cardset__input"
                        placeholder="Name..."
                        onChange={this.handleChange}
                    />
                    <button
                        onClick={this.handleSubmit}
                        className="button cardset__submit">
                        Save changes
                    </button>
                </form>
            </div>
        )
    }
}

export default AddCardsetForm;