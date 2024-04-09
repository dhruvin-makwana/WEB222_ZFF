const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 8001;

app.get('/api', (req, res) => {
  let price = 67697.64;
  const perc = Math.random() * 2 - 1;
  price = price + (price * perc) / 100;
  price = Math.round(price * 100) / 100;
  res.send(price.toString());
});

app.get('/', (req, res) => {
  let price = 67697.64;
  const perc = Math.random() * 2 - 1;
  price = price + (price * perc) / 100;
  price = Math.round(price * 100) / 100;
  res.send(`Bitcoin Price: ${price} (USD)`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
