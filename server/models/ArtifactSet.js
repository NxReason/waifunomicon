import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const ArtifactSet = sequelize.define(
  'ArtifactSet',
  {
    name: {
      type: DataTypes.STRING(256),
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default ArtifactSet;
