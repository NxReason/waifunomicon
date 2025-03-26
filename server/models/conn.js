const { Sequelize } = require('sequelize');

const name = process.env.PG_NAME;
const user = process.env.PG_USER;
const pass = process.env.PG_PASS;
if (!(name && user && pass)) {
  console.error(
    'DB credentials must be defined through env variables (PG_NAME, PG_USER, PG_PASS)'
  );
  process.exit(1);
}

const conn = new Sequelize(name, user, pass, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = conn;
