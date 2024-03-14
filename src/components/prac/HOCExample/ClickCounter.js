import React, { Component } from 'react';
import WithHigherOrder from './WithHigherOrder';

 class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // handleClick = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
    render() {
        const {incrementCount, count} = this.props
        return (
            <>
                <div>ClickCounter</div>
                <button onClick={incrementCount}>{`clicked ${count} times`}</button>
            </>
        )
    }
}

export default WithHigherOrder(ClickCounter)
