const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let users = [];
let idCounter = 1;

// POST 
app.post('/new', (req, res) => {
  const { username, gender, date } = req.body;
  if (!username || !gender || !date) {
    return res.status(400).json({ error: 'Please provide valid data' });
  }
  const newUser = {
    id: idCounter++,
    username,
    gender,
    date
  };

  users.push(newUser);
  res.status(201).json({newUser, message: 'User added successfully' });
});

// GET 
app.get('/list', (req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});


/*
{
  "username": "Hitchhiker",
  "gender": "M",
  "date": "26-12-2000"
}
*/





