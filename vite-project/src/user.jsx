 // App.jsx
import React from "react";
import UserList from "./UserList";

function App() {
  const users = ["Rohit", "Aman", "Priya", "Karan"];

  return (
    <div>
      <h1>User Names</h1>

      {/* Passing array as props */}
      <UserList users={users} />
    </div>
  );
}

export default App;