import React, { Component } from "react";
class Main extends Component {
  state = {
    articles: []
  };

  fetchArticles = () => {
    fetch("https://hn.algolia.com/api/v1/search?query=")
      .then(res => res.json())
      .then(response => {
        this.setState({ articles: response.hits });
      });
  };
  render() {
    console.log(this.state.articles);
    return (
      <div>
        <button onClick={this.fetchArticles}>Fetch Articles</button>
        {this.state.articles.map}
      </div>
    );
  }
}

export default Main;
