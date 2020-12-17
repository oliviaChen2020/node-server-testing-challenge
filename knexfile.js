// Update with your config settings.
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: './data/movies.db3',
    },
  },
  testing: {
    ...sharedConfig,
    connection: {
      filename: './data/test.db3',
    },
  },
};
