import React from "react"
import randomcolor from "randomcolor"
import Conditional from "./Conditional"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
        this.setState((prevState) => {
          return {
          isLoggedIn: !prevState.isLoggedIn
          }
        })
      }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"

    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }



}

  



// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//       color: "",
//       isLoading: true 
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   handleClick() {
//     this.setState((prevState) => {
//       return {
//       count: prevState.count +1*2
//       }
//     })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.count !== this.state.count) {
//       const newColor = randomcolor()
//       this.setState({color: newColor})
//     }
//     }
  

//   render() {
//     return (
//       <div>
//         <Conditional isLoading={this.state.isLoading}/>
//         <h1 style={{color: this.state.color}}>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// } 

export default App