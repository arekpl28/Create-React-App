import React from "react";

const UsersList = props => {
  const users = props.users.map(user => {
    return (
      <>
        <h1 key={user.login.username}>
          {user.name.title} {user.name.first} {user.name.last}
        </h1>
        <p>email: {user.email}</p>
      </>
    );
  });
  console.log(props.users);
  return (
    <>
      <div>{users}</div>
    </>
  );
};

export default UsersList;
