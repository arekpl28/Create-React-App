import React from "react";

const UsersList = props => {
  const users = props.users.map(user => {
    return (
      <div key={user.login.username} className="user">
        <img src={user.picture.large} alt={user.name.last} />
        <h1>
          {user.name.title} {user.name.first} {user.name.last}
        </h1>
        <p>email: {user.email}</p>
      </div>
    );
  });
  return (
    <>
      <div className="users">{users.reverse()}</div>
    </>
  );
};

export default UsersList;
