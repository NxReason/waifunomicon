import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const Character = sequelize.define(
  'Character',
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Character;
