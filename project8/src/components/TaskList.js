import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  done.sort((a, b) => b.finishDate - a.finishDate);

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <hr />
      <div className="active">
        <h2>Things to do sorted by alphabet!</h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p className="nothing">Nothing to do :-)</p>
        )}
      </div>
      <hr />
      <div className="done">
        <h3>
          Tasks done sorted by date task was completed! <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span className="max">Only the last 5 tasks are displayed!!</span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
