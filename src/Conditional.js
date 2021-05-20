import React from "react"

function Conditional(props) {
    // if(props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //      return (
    //         <h1>Done!</h1>
    //      )
    // }
return (
    <div>
        {props.isLoading === true ? <h1>Loading</h1> : <h1>Done</h1>}
    </div>
    )
}



export default Conditional
