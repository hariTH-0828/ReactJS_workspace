import React from 'react'

//function components:

function Helloworld () {
    return (
        <h1>Welcome to ReactJS</h1>
    );
}

// Without JSX

// const Helloworld = () =>{
//     return(
//         //React.createElement('html tag', 'property tag', 'children for html element')
//         React.createElement('div', 
//         {className : 'Hello'},
//         React.createElement('h1', null, 'Hello world WO JSX'))
//     )
// }

export default Helloworld