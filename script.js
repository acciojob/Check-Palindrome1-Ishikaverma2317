// server.js or app.js
const express = require('express');
const bodyParser = require('body-parser');
const palindrome = require('./palindrome');  // ✅ correct import

const app = express();
app.use(bodyParser.json());

app.post('/palindromechecker', (req, res) => {
  const { str } = req.body;
  if (typeof str !== 'string') {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const result = palindrome(str);
  res.status(200).json({ result });  // ✅ Send valid JSON response
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
