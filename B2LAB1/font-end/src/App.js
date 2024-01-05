// App.js
import React, { useState } from 'react';
import AddUserComponent from './components/AddUserComponent';
import UserListComponent from './components/UserListComponent';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <h1>User Management App</h1>
      <AddUserComponent addUser={addUser} />
      <UserListComponent users={users} />
    </div>
  );
}

export default App;

