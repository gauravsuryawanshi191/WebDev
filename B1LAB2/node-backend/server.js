const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const users = [{}];

// POST endpoint to add a new user
app.post('/new', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added successfully', user: newUser });
});

// POST endpoint to get the list of all users
app.post('/list', (req, res) => {
  res.status(200).json({ users });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
