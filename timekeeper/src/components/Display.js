import React from "react";

const Display = props => {
  return (
    <>
      <p>{(props.time / 100).toFixed(2)}</p>
    </>
  );
};

export default Display;
