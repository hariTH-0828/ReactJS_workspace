import React, { Component } from "react";


class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 3
        }
    }

    Increment(countBy) {
        this.setState(prevState => ({
            count: prevState.count + countBy
        }))
    }
}

class OddCounter extends Counter {

    render() {
        const { countBy } = this.props
        return (
            <div>
                <h4>Count : {this.state.count}</h4>
                <button onClick={() => this.Increment(countBy)}>Submit</button>
            </div>
        )
    }
}

export default OddCounter