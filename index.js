const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Здраво, свет!');
});

app.listen(port, () => {
  console.log(`Серверот слуша на http://localhost:${port}`);
});