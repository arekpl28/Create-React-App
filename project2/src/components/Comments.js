import React from "react";

const Comments = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.body}</h3>
    </div>
  );
};

export default Comments;
