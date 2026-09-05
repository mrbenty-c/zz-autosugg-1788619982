const express = require('express');
const fs = require('fs');
const app = express();
app.get('/read', (req, res) => {
  const data = fs.readFileSync(req.query.file, 'utf8');
  res.send(data);
});
app.listen(3000);
