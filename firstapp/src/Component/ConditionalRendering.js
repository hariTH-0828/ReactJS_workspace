import React, { Component } from "react";

export class ConditionalRendering extends Component{
    // if-else Condition
    // Element Variables
    // Short-Circuit Condition
    // Ternary Conditional Operator
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        // 1. if/else Condition :

        /* if(this.state.isLoggedIn){
            return(
                <div>
                    <h2>Welcome to Logged In Page</h2>
                </div>
            )
        }else {
            return(
                <div>
                    <h2>Welcome to Guest Page</h2>
                </div>
            )
        } */

        // 2. Element Variables:

        /* let message
        if(this.state.isLoggedIn){
            message = <div><h2>Welcome to LoggedIn Page</h2></div>
        }else {
            message = <div><h2>Welcome to Guest Page</h2></div>
        }

        return(
            <div>{message}</div>
        ) */

        // 3. Ternary Conditional Operator

        /* return (
            this.state.isLoggedIn ? (
                <div>
                    <h2>Welcome to LoggedIn Page</h2>
                </div>
            ) : (
                <div>
                    <h2>Welcome to Guest Page</h2>
                </div>
            )
        ) */

        // 4. Short-Circuit Operator

        return this.state.isLoggedIn && <div>
            <h2>Welcome to LoggedIn Page</h2>
        </div>
    }
}