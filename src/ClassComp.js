// There are two different ways of creating components in React :
// Class Component
// Function Component

// import React from "react";
// class ClassComp extends React.Component

import React , {Component} from "react";
class ClassComp extends Component{
  constructor(){
    super();
    this.state={
        name : "gaurav bisht",
        age : 4.5,
    }
  }

  render(){
    return (
      <div>
        <h1>Hello World !!</h1>
        <p>Student name is {this.state.name}</p>
        <p>Student age is {this.state.age}</p>
      </div>
    )
  }
}

export default ClassComp;

// class ClassComp extends Component{
//   state={

//   }
// }