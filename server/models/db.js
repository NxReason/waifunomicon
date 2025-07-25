import { Sequelize, DataTypes } from 'sequelize';

const { PG_NAME, PG_USER, PG_PASS, PG_HOST, PG_PORT } = process.env;
const sequelize = new Sequelize(PG_NAME, PG_USER, PG_PASS, {
  dialect: 'postgres',
  host: PG_HOST,
  port: PG_PORT,
  logging: false,
});

import CharacterModel from './Character.js';
import ArtifactSetModel from './ArtifactSet.js';

const Character = CharacterModel(sequelize, DataTypes);
const ArtifactSet = ArtifactSetModel(sequelize, DataTypes);

export const models = {
  Character,
  ArtifactSet,
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

export async function auth() {
  try {
    await sequelize.authenticate();
    console.log(`Connected to DB: ${PG_NAME}`);
    return true;
  } catch (err) {
    console.error(`Not connected to DB, authentication failed`);
    return false;
  }
}

export async function sync() {
  try {
    await sequelize.sync({ alter: true });
  } catch (err) {
    console.error(`Can't sync models to DB`);
  }
}

export default sequelize;
