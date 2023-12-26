import React, {Component} from "react";
class App extends Component {
  render() {
    return (
      <div>
      {/* <div className="Container">
        Phone directory
      </div>
      <button>Add</button>
      <div>
        <span>Name</span><br />
        <span>Phone</span>
      </div> */}
      <label htmlFor="name">Userame:</label>
      <input id="name" type="text" placeholder="Type here" defaultValue={"Chandana"}></input><br />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" placeholder="********" defaultValue={"!@#$%&&*"}></input>
      </div>
      
    );
  }
  
}

export default App;
