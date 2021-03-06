import React, { Component } from 'react';

class Arc extends Component {
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
            <form onSubmit={this.fetchArticles}>
            <input onChange={this.onChange}></input>
            <button type="submit">Submit</button>
            {
              this.state.arcs.map(arc => {
                return <p> <a href={arc.url}>{arc.title}</a></p>
              })
            }
          </form>
        );
    }
}

export default Arc;