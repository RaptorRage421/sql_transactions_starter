const pg = require('pg');

const config = {
  database: 'sql-transactions-starter-db',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("Connected to PostgreSQL Database");
});

pool.on("error", (error) => {
  console.log("Error connecting to PostgreSQL Database", error);
});

module.exports = pool;
