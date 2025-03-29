const conn = require('./conn');
const GICharacter = require('./GICharacter');
const Artifact = require('./Artifact');
const ArtifactSet = require('./ArtifactSet');

const isDev = process.env.NODE_ENV === 'dev';

async function sync() {
  if (isDev) {
    await conn.sync({ force: true });
  }
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

  const sets = await ArtifactSet.bulkCreate([
    { name: 'Set 1' },
    { name: 'Set 2' },
  ]);
  await Artifact.bulkCreate([
    {
      name: 'Flower of Mond',
      slot: 'Flower',
      level: 20,
      artifactSetId: sets[0].id,
    },
    {
      name: 'Flower of Li',
      slot: 'Flower',
      level: 15,
      artifactSetId: sets[1].id,
    },
    {
      name: 'Feather of Mond',
      slot: 'Feather',
      level: 20,
      artifactSetId: sets[0].id,
    },
    {
      name: 'Sands of Mond',
      slot: 'Sands',
      level: 20,
      artifactSetId: sets[0].id,
    },
    {
      name: 'Goblet of Li',
      slot: 'Goblet',
      level: 20,
      artifactSetId: sets[1].id,
    },
    {
      name: 'Mask of Mond',
      slot: 'Mask',
      level: 20,
      artifactSetId: sets[0].id,
    },
  ]);
}

module.exports = {
  isConnected,
  populate,
  sync,
  models: { GICharacter, Artifact, ArtifactSet },
};
