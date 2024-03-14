import React from "react";

class ActionAfterStateUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }
    handleButton = () => {
        this.setState(prevState => {
            return { value: prevState.value + 1 }
        }, () => {
            console.log('value after state update', this.state.value);
        })

    }
    render() {
        return (
            <>
                <button onClick={this.handleButton}>value after state update</button>
                <h2>{this.state.value}</h2>
            </>
        )
    }
}

export default ActionAfterStateUpdate