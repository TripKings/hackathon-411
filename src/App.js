import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input label="Search"></input>
          </form>
          
        </header>
      </div>
    );
  }
}

export default App;
