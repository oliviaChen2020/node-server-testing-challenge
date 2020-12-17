const db = require('../../data/dbConfig');
const Movies = require('./movies-model');

const movieOne = { name: 'Inception' };
const movieTwo = { name: 'Titanic' };
const movieThree = { name: 'Elf' };
const moviefour = { name: 'Alien' };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db('movies').truncate();
});
afterAll(async () => {
  await db.destroy();
});
describe('Movies model', () => {
  it('respond with an empty array if no movie', async () => {
    const result = await Movies.getAll();
    expect(result).toHaveLength(0);
  });

  it('check movies returned when added', async () => {
    await db('movies').insert(movieOne);
    const result = await Movies.getAll();
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('name', 'Inception');
  });
});
