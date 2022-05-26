import React, { Component } from "react"

class reusablity extends Component {
    constructor() {
        super()
        this.state = {
            Message : "Welcome to ReactJS"
        }

        // this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage() {
    //     this.setState({
    //             Message : <h2>Welcome Mr.{this.props.name}</h2>
    //     })
    // }

    changeMessage = () => {
        const {name}= this.props
        this.setState({
            Message : <div>{name}</div>
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.Message}</h2>

                {/* Binding EventHandler */}

                {/* <button onClick={this.changeMessage.bind(this)}>Click Me</button> */}
                {/* <button onClick={() => this.changeMessage()}>Submit</button> */}
                <button onClick={this.changeMessage}>Click Me</button>
            </div>
        )
    }
}


export default reusablity