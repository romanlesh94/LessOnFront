import React from "react";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LessonWindow extends React.Component {

    state ={
        isModalOpen: false,
    }

    windowToggle = (e: any) => {
        e.preventDefault();
        this.setState({isModalOpen: !this.state.isModalOpen});
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    windowRef = React.createRef<HTMLDivElement>();

    handleClickOutside = (event: any) => {
        event.preventDefault();
        if (this.windowRef.current !== null && this.windowRef.current && !this.windowRef.current.contains(event.target)) {
            this.setState({isModalOpen: false});
        }
    };

    render() {
        return (
            <div className="lesson__modal" ref={this.windowRef}>
                <FontAwesomeIcon onClick={this.windowToggle} icon={faEllipsisV} className="lesson__more"/>
                <div className={this.state.isModalOpen ? "lesson__window" : "lesson__window--is-closed"}>
                    <div className="lesson__buttons-wrapper">
                        <button className="lesson__button">Remove exercise</button>
                        <button className="lesson__button">Update exercise</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LessonWindow;