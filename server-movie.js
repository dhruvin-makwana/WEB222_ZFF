const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 8001;
const data = require('./data.json');
app.get('/movies', (req, res) => {
  if (req.query.original_title_like) {
    const result = data.movies.filter((movie) =>
      movie.original_title
          .toLowerCase()
          .includes(req.query.original_title_like),
    );
    res.send(result);
  } else {
    res.send(data.movies);
  }
});

app.get('/suggestions', (req, res) => {
  const random = data.movies
      .sort(() => Math.random() - Math.random())
      .slice(0, 5);
  res.send(random);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
