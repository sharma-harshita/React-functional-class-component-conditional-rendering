import React from "react";
import ClassComp from "./ClassComp";
import { FunctionalComp } from "./FunctionalComp";


// default export and named export : When you export any component by saying "export default App" then while importing we dont have to wrap the name of the component {line no.2 } with curly braces. But in case of named export "export App", we will have to wrap the component name in curly braces {line no 3}



// Conditional Rendering : Its a concept which allows you to show or hide any specific part of the component. We can use if-else statement, Switch statement, logical and && operator , ternary opertor 
// {/* <cond> ? if cond is true : if cond fails  */}
class App extends React.Component{

  state = {
    showFunctionalComp: true
  }

  toggleFunctionalComponet = ()=>{
  // we should not follow this approach , reason is that whenever you are updating the state variable value you must use this.setState function , so that your component understands that any state variable value has been updated so the compnents has to be rerendered.
      // this.state.showFunctionalComp= false
      this.setState({showFunctionalComp:!this.state.showFunctionalComp})
  }

  render(){
    return (
      <div>
        <ClassComp />
        {this.state.showFunctionalComp && <FunctionalComp />}
        {this.state.showFunctionalComp ? <FunctionalComp /> : <div>Functional component wont be displayed</div>}

        {/* Conditional Rendering based on button click */}

        <button onClick={this.toggleFunctionalComponet}>Click to toggle the functioal component</button>
      </div>
    )
  }
}

export default App