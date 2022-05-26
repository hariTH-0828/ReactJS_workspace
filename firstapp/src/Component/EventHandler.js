import React, { Component } from 'react'

class EventHandler extends Component {

    ClickHandler(){
        console.log('Button Clicked')
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>Click Me</button>
      </div>
    )
  }
}

// function FunctionClick(){
//     function ClickHandler(){
//         console.log('Button Click By Function')
//     }

//     return(
//         <button onClick={ClickHandler}>Click</button>
//     )
// }

export default EventHandler