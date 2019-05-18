import React from "react";

const Task = props => {
  const { id, text, date, active, important, finishDate } = props.task;

  const style = {
    color: "red"
  };

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong>
          <span> - {date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>Delete</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text} </strong>
          <em>(deadline to: {date})</em>
          <span> - completed on: {finish} </span>
          <button onClick={() => props.delete(id)}>Delete</button>
        </p>
      </div>
    );
  }
};

export default Task;
