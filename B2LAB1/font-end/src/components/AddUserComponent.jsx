// AddUserComponent.js
import React, { useState } from 'react';

const AddUserComponent = ({ addUser }) => {
  const [user, setUser] = useState({
    username: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddUser = () => {
    addUser(user);
    setUser({
      username: '',
      gender: '',
      dateOfBirth: '',
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} required />

        <label>Gender:</label>
        <input type="text" name="gender" value={user.gender} onChange={handleInputChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" value={user.dateOfBirth} onChange={handleInputChange} required />

        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserComponent;
