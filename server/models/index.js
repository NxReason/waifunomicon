const conn = require('./conn');
const GICharacter = require('./GICharacter');

async function sync() {
  await conn.sync({ force: true });
}

function isConnected() {
  try {
    conn.authenticate();
    console.log(`Connected to DB`);
  } catch (err) {
    console.error(`DB connection wasn't established: ${err}`);
  }
}

async function populate() {
  await GICharacter.bulkCreate([
    { name: 'Raiden Ei' },
    { name: 'Mavuika' },
    { name: 'Arle' },
    { name: 'Yelan' },
  ]);
}

module.exports = { isConnected, populate, sync, models: { GICharacter } };
