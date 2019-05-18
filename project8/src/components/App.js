import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Buy a house",
        date: "2020-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Run a marathon",
        date: "2020-05-25",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Visit mother-in-law",
        date: "2038-03-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Begin to go to the gym",
        date: "2020-03-22",
        important: false,
        active: false,
        finishDate: 1558193636513
      },
      {
        id: 4,
        text: "Eating a healthy",
        date: "2020-04-12",
        important: false,
        active: false,
        finishDate: 1558093736513
      },
      {
        id: 5,
        text: "Change the car",
        date: "2020-06-02",
        important: false,
        active: false,
        finishDate: 1558173736513
      }
    ]
  };

  counter = 7;

  handleDeleteTask = id => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks: tasks
    // });
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: tasks
    });
  };

  handleChangeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    const date = new Date().getTime();
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = date;
      }
    });
    this.setState({
      tasks: tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    // let tasks = [...this.state.tasks];
    // tasks.push(task);
    // this.setState({
    //   tasks: tasks
    // });
    this.setState(prevState => ({
      tasks: [...this.state.tasks, task]
    }));
    this.counter++;
    return true;
  };

  render() {
    const tasks = this.state.tasks;
    return (
      <>
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={tasks}
          delete={this.handleDeleteTask}
          change={this.handleChangeTaskStatus}
        />
      </>
    );
  }
}

export default App;
