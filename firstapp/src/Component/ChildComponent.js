import React from "react";

function ChildComponent(props) {
    return(
        <div>
            <h3>From ChildComponent</h3>
            <button onClick={() => props.greetHandler('Child')}>Click Me</button>
        </div>
    )
}

export default ChildComponent