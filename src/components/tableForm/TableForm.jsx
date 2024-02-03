import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./tableFrom.style.css";
const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  birthYear: "",
  country: "",
};

const TableForm = ({ addUserHandler }) => {
  const [formData, setFormData] = useState(defaultData);

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: uuidv4() };
    addUserHandler(newUser);
    setFormData(defaultData);
  };

  return (
    <div className="main">
      <form onSubmit={onSubmit}>
        <div className="names">
          {" "}
          <span>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={onInputChange}
              type="text"
              value={formData.firstName}
              name="firstName"
            ></input>
          </span>
          <span>
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={onInputChange}
              type="text"
              value={formData.lastName}
              name="lastName"
            ></input>
          </span>
        </div>
        <div className="contact">
          <label htmlFor="phone">Phone</label>
          <input
            onChange={onInputChange}
            type="phone"
            value={formData.phone}
            name="phone"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            onChange={onInputChange}
            type="email"
            value={formData.email}
            name="email"
          ></input>
        </div>
        <div className="personal">
          <div>
            <label htmlFor="birthYear">BirthYear</label>
            <input
              onChange={onInputChange}
              type="number"
              value={formData.birthYear}
              name="birthYear"
            ></input>
          </div>
          <div className="country">
            <label htmlFor="country">Country</label>
            <select
              onChange={onInputChange}
              value={formData.country}
              name="country"
            >
              <option value="USA">USA</option>
              <option value="CAN">Canada</option>
              <option value="RUS">Russia</option>
              <option value="UK">UK</option>
              <option value="KG">Kyrgyzstan</option>
            </select>
          </div>
        </div>
        <button type={onSubmit}>ADD</button>
      </form>
    </div>
  );
};

export default TableForm;
