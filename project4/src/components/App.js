import React, { Component } from "react";
import "./App.css";
import Users from "./Users";

class App extends Component {
  state = {
    users: [],
    isLoaded: false
  };

  componentDidMount() {
    this.requestData();
  }
  requestData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      // console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({
          users: users,
          isLoaded: !this.state.isLoaded
        });
      }
      // console.log(xhr.response);
    };
    xhr.send(null);
  };
  render() {
    const users = this.state.users.map(user => (
      <Users
        key={user.id}
        name={user.name}
        email={user.email}
        city={user.address.city}
      />
    ));
    return (
      <>
        <ul>
          {this.state.isLoaded ? users : "I'm downloading data from server :-)"}
        </ul>
      </>
    );
  }
}

export default App;
