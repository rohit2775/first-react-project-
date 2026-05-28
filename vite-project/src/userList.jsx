
import React from "react";

function UserList(props) {
  return (
    <div>
      {props.users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default UserList;