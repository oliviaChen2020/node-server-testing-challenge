const express = require('express');

const server = express();

const movieRouter = require('../api/movies/movies-router');

server.use(express.json());
server.use('/api/movies', movieRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});
module.exports = server;
