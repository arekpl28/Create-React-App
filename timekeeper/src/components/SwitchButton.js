import React from "react";

const SwitchButton = props => {
  return (
    <button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
  );
};

export default SwitchButton;
