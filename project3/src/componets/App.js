import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false
  };

  //Forced delay

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: !this.state.isLoaded,
          words: data.words
        });
      });
  };

  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));
    return (
      <>
        <ul>
          {this.state.isLoaded
            ? words
            : "I am downloading data from server :-)"}
        </ul>
      </>
    );
  }
}

export default App;
