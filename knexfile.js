require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: {
      connectionString: process.env.db,
      ssl: { rejectUnauthorized: false }
    },
    searchPath: ['knex', 'public'],
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
};

  
