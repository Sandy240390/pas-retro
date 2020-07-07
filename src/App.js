import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import StickyNote from './StickyNote';


class App extends Component {

  componentDidUpdate(){
    console.log("rerendering form  did update");
  }
  render() {
    console.log("rerendering from render");
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "solid 1px #ddd",
      background: "#f0f0f0"
    };

    const style1 = {
      'max-width': "18rem",
    };

    return (
   //  <Rnd style={style} default={{ x: 0, y: 0, width: 250, height: 230 }} enableUserSelectHack={false}>
 
      <div>
        <div className="card text-white bg-primary" style={style1}>
        <div className="card-header"></div>
        <textarea resize= "horizontal" className="card-text bg-primary border-0 text-white"  ></textarea>
        </div>
      
      </div>
   // </Rnd> 
    );
  }
  
}

export default App;
