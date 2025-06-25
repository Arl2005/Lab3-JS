const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON bodies

const filePath = './data/items.json';

// GET (Read All)
app.get('/items', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

// POST (Create)
app.post('/items', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newItem = req.body;
  data.push(newItem);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).json(newItem);
});

// PUT (Update)
app.put('/items/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } else {
    res.status(404).send("Item not found");
  }
});

// DELETE
app.delete('/items/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync(filePath));
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`CRUD server on http://localhost:${PORT}`);
});
