import React, { useState, useEffect } from "react";
import TableForm from "../components/tableForm/TableForm";
import UserTable from "../components/tableRow/UserTable";
import { v4 as uuidv4 } from "uuid";

const usersURL = "https://jsonplaceholder.typicode.com/users";

const TableApp = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers([...users, { ...user, id: uuidv4().slice(0, 3) }]);
  };

  const deleteUserHandler = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const response = await fetch(usersURL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="container">
      <TableForm addUserHandler={addUserHandler} />
      <UserTable users={users} onDeleteHandler={deleteUserHandler} />
    </div>
  );
};

export default TableApp;
