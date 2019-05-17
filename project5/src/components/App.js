import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null
  };

  handleDataFetch = () => {
    console.log("dziala");
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.results
        });
        console.log(data.results);
      })
      .catch(error => console.log(error));
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </>
    );
  }
}

export default App;
