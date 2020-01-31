import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import Arc from "./Components/Arc"

class App extends React.Component{




  render() {
    return (
      <div className="App">
        <header className="">
          <Arc />
          
        </header>
      </div>
    );
  }
}

export default App;
