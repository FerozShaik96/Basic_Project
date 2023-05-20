import React, { useState } from "react";
import AddUser from "./Users/AddUser/AddUsers";
import UserList from "./Users/UserList/UsersList";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const UserDataHandler = (data) => {
    setUserData((prevUserData) => {
      return [...prevUserData, data];
    });
  };
  return (
    <React.Fragment>
      <AddUser onSave={UserDataHandler} />
      <UserList users={userData} />
    </React.Fragment>
  );
}

export default App;
