import React from "react";

const Users = props => {
  return (
    <li>
      <h1>Name: {props.name}</h1>
      <h2>Email: {props.email}</h2>
      <h3>City: {props.city}</h3>
    </li>
  );
};

export default Users;
