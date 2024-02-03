import React, { useState } from "react";
import "./UserTable.style.css";

const UserTable = ({ users, onDeleteHandler }) => {
  const calcAge = (birthYear) => {
    if (!birthYear) return "unknown";
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  const countryName = (users) => {
    if (users && users.address && users.address.city) {
      return users.address.city;
    } else if (users && users.country) {
      const countryChange = {
        USA: "United States",
        CAN: "Canada",
        RUS: "Russia",
        UK: "United Kingdom",
        KG: "Kyrgyzstan",
      };
      return countryChange[users.country] || users.country;
    } else {
      return "unknown";
    }
  };

  return (
    <div className="table">
      <table>
        <tr className="first-row">
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Country</th>
          <th>Age</th>
          <th>X</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id} className="row">
            <td>{user.id}</td>
            <td>
              {user.firstName} {user.lastName}
              {user.name}
            </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{countryName(user)}</td>
            <td>{calcAge(user?.birthYear)}</td>
            <td>
              <button onClick={() => onDeleteHandler(user.id)}>X</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserTable;
