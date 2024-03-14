import React, { Component } from 'react';
import WithHigherOrder from './WithHigherOrder';

 class HoverCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // handleMouseEvent = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
    render() {
        const {incrementCount, count} = this.props
        return (
            <>
                <div onMouseOver={incrementCount}>{`Hovered ${count} times`}</div>

            </>
        )
    }
}
export default WithHigherOrder(HoverCounter);


