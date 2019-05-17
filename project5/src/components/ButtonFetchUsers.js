import React from "react";

const ButtonFetchUsers = props => {
  return (
    <>
      <button onClick={props.click}>Show 5 random users</button>
    </>
  );
};

export default ButtonFetchUsers;
