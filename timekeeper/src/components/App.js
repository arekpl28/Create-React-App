import React, { Component } from "react";
import "../css/style.css";
import SwitchButton from "./SwitchButton";
import ResetButton from "./ResetButton";
import Display from "./Display";

class App extends Component {
  state = {
    time: 0,
    active: false
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else if (!this.state.active) {
      this.idInterval = setInterval(() => this.addSecond(), 10);
    }

    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  addSecond = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  handleReset = () => {
    clearInterval(this.idInterval);
    this.setState({
      time: 0,
      active: false
    });
  };

  render() {
    const { active, time } = this.state;
    return (
      <>
        <SwitchButton click={this.handleClick} active={active} />
        <ResetButton reset={this.handleReset} />
        <Display time={time} />
      </>
    );
  }
}

export default App;
