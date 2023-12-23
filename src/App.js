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
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" placeholder="Type here" defaultValue={"Chandana"}></input>
      </div>
      
    );
  }
  
}

export default App;
