import React, { Component } from "react";

class App extends Component {
  componentDidUpdate() {
    console.log("rerendering form  did update");
  }
  render() {
    const style1 = {
      "max-width": "18rem",
    };

    return (
      <div>
        <div className="card text-white bg-primary" style={style1}>
          <div className="card-header"></div>
          <textarea
            resize="horizontal"
            className="card-text bg-primary border-0 text-white"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default App;
