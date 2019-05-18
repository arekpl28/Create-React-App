import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    date: this.minDate,
    checked: false
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleDateChange = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleChecked = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("Task name is too short");
    }
  };

  render() {
    const { text, checked, date } = this.state;
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          id="important"
          checked={checked}
          onChange={this.handleChecked}
        />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">Until when to do it</label>
        <input
          type="date"
          value={date}
          onChange={this.handleDateChange}
          min={this.minDate}
        />
        <br />
        <button onClick={this.handleClick}>Add task</button>
      </div>
    );
  }
}

export default AddTask;
