import React from "react";

// class ListRendering extends Component{

//     render() {
//         const Names = ['Hari','Raja','Rangan']
//         return (
//             <div>
//                 {
//                     Names.map(name => <h2>{name}</h2>)
//                 }
//             </div>
//         );
//     }
// }

function ListRendering(){
    const Names = ['Hari','Raja','Rangan','Vishnu']
    const NameList = Names.map(name => <h3>{name}</h3>)
    return(
        NameList
    )
}
export default ListRendering