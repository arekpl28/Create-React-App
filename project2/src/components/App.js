import React, { Component } from "react";
import "./App.css";
import Comments from "./Comments";

const data = [
  {
    id: 1,
    title: "Message number 1",
    body: "The content of message number 1..."
  },
  {
    id: 2,
    title: "Message number 2",
    body: "The content of message number 2..."
  }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message number ${index}`,
    body: `The content of message number ${index}`
  });
}, 3000);

class App extends Component {
  state = {
    comments: [...data]
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      });
    }
  };

  componentDidMount() {
    this.idInterval = setInterval(this.getData, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <Comments key={comment.id} title={comment.title} body={comment.body} />
    ));
    return <>{comments.reverse()}</>;
  }
}

export default App;
