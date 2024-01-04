const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let events = [];

// API to add a new event
app.post('/new', (req, res) => {
  const event = req.body;
  events.push(event);
  res.status(201).json({ message: 'Event added successfully' });
});

// API to list all events
app.get('/list', (req, res) => {
  res.status(200).json(events);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
