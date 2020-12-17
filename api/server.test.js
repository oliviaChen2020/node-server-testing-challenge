const request = require('supertest');
const server = require('./server'); // a router
const db = require('../data/dbConfig');

const movieOne = { name: 'Inception' };

beforeEach(async () => {
  await db('movies').truncate();
});

describe('[GET] /movies', () => {
  it('resturns movies', async () => {
    let res = await request(server).get('/movies');
    expect(res.body).toHaveLength(0);
  });
});
