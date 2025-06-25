const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Route to read JSON file
app.get('/items', (req, res) => {
  fs.readFile('./data/items.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('File read error');
    res.send(data); // raw JSON content
  });
});

app.listen(PORT, () => {
  console.log(`JSON server on http://localhost:${PORT}`);
});
