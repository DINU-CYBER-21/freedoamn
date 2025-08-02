const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const filePath = path.join(__dirname, 'users.json');

// Initialize file if not exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]');
}

app.post('/save', (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  let users = JSON.parse(fs.readFileSync(filePath));
  users.push(user);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({ message: 'User saved successfully to file.' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
