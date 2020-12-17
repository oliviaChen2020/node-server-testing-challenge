exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('movies')
    .truncate()
    .then(function () {
      return knex('movies').insert([
        { name: 'Inception' },
        { name: 'Titanic' },
        { name: 'Elf' },
        { name: 'Alien' },
      ]);
    });
};
