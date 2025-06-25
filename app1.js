// Boilerplate
const express = require('express');
const app = express();
const PORT = 3000;

// Root route - Group name
app.get('/', (req, res) => {
  res.send(`
    <h1>Team Name</h1>
    <p>Member 1: Arleen Kaur</p>
    <p>Member 2: Hardeep Singh</p>
    <p>Member 3: Sukhdeep Kaur</p>
  `);
});

// Listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
