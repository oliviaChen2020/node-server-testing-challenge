const express = require('express');

const Movies = require('./movies-model');

const router = express.Router();

router.get('/', (req, res) => {
  Movies.getAll()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/:id', async (req, res) => {
  const movie = await Movies.getById(req.params.id);
  if (!movie) {
    res.status(404).end();
  } else {
    res.json(movie);
  }
});

router.post('/', async (req, res) => {
  const newMovie = await Movies.insert(req.body);
  res.json(newMovie);
});

router.delete('/:id', (req, res) => {
  res.end();
});

router.put('/:id', (req, res) => {
  res.end();
});

module.exports = router;
