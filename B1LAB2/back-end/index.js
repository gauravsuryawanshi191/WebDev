// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let products = [];
let idCounter = 1;

// POST 
app.post('/new', (req, res) => {
  const { name, price, date } = req.body;
  if (!name || !price || !date) {
    return res.status(400).json({ error: 'Please provide valid data' });
  }
  const newProduct = {
    id: idCounter++,
    name,
    price,
    date
  };

  products.push(newProduct);
  res.status(201).json({newProduct, message: 'Product added successfully' });
});

// GET 
app.get('/list', (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});


/*
{
  "name": "The Hitchhiker's Guide to the Galaxy",
  "price": 100,
  "date": "26-12-2022"
}
*/
