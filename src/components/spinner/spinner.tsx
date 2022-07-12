import React from "react";

class Spinner extends React.Component <{
    isLoading: boolean,
}>{
    render () {
        return (
            <div className={this.props.isLoading ? "spinner" : "spinner--closed"}>

            </div>
        )
    }
}

export default Spinner;