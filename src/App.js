import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import ArcList from "./Components/ArcList"

class App extends React.Component{
  state = {
    arcs: [],
    input: ""
  }

  onChange = (e) => {
    this.setState({input: e.target.value})

  }

  fetchArticles = (e) => {
    e.preventDefault()
    fetch("https://hn.algolia.com/api/v1/search?query=" + this.state.input)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({ arcs: response.hits})
      });
  };



  render() {
    return (
      <div className="App">
        <header className="">
          <form onSubmit={this.fetchArticles}>
            <input onChange={this.onChange}></input>
            <button type="submit">Submit</button>
            {
              this.state.arcs.map(arc => {
                return <p>{arc.title}</p>
              })
            }
          </form>
          
        </header>
      </div>
    );
  }
}

export default App;
