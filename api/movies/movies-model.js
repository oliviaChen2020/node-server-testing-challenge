const db = require('../../data/dbConfig');

module.exports = {
  insert,
  remove,
  getAll,
  getById,
};

function getAll() {
  return db('movies');
}

function getById(id) {
  return db('movies').where('id', id).first();
}

async function insert(movie) {
  const [id] = await db('movies').insert(movie);
  return db('movies').where({ id }).first();
}

function remove(id) {
  return db('movies').where({ id }).del();
}
