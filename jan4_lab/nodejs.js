let http= require("http")
let app=http.createServer();
app.listen(3000,"localhost");


app.post('/new', (req, res) => {
    // Get the event details from the request body
    const event = req.body;
  
    // Save the event to the database or storage system
    // ...
  
    // Send a response indicating that the event was successfully added
    res.status(200).json({ message: 'Event added successfully' });
  });

  app.get('/list', (req, res) => {
    // Retrieve the list of events from the database or storage system
    const events = [
      { id: 1, name: 'Event 1' },
      { id: 2, name: 'Event 2' },
      { id: 3, name: 'Event 3' },
      // ...
    ];
  
    // Send the list of events as a response
    res.status(200).json(events);
  });