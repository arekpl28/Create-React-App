import React, { Component } from "react";
// import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIkey = "APPID=32573b92e4177ca5a99a6b4422c74fe3";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    err: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
    if (e.target.value.length === 0) {
      this.setState({
        err: false,
        city: ""
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&${APIkey}&units=metric`;
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Failed");
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            err: false,
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            wind: data.wind.speed,
            pressure: data.main.pressure
          }));
        })
        .catch(err => {
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }));
        });
    }
  }

  render() {
    const value = this.state.value;
    return (
      <>
        <Form value={value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </>
    );
  }
}

export default App;
