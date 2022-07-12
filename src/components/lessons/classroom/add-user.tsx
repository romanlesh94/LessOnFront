import React from "react";

class AddUser extends React.Component <{
    isAddUserOpen: boolean,
    addOutsideClickCallback: (value: boolean) => void,
}>{

    state={
        name: '',
    }

    handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})
        console.log(this.state.name);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    addUserRef = React.createRef<HTMLDivElement>();

    handleClickOutside = (event: any) => {
        if (this.addUserRef.current !== null
            && this.addUserRef.current
            && !this.addUserRef.current
                .contains(event.target)) {
            this.props.addOutsideClickCallback(false);
        }
    }

    render() {
        return (
            <div ref={this.addUserRef} className={this.props.isAddUserOpen ? "add-user" : "add-user__is-closed"}>
                <form className="add-user__form">
                    <span className="add-user__title">Let's add a new person to your classroom!</span>
                    <input
                        name="name"
                        type="text"
                        className="add-user__input"
                        placeholder="Enter name or email..."
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        className="button add-user__submit">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default AddUser;