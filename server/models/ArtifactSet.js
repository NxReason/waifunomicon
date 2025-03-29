const { Model, DataTypes } = require('sequelize');
const conn = require('./conn');

class ArtifactSet extends Model {}

ArtifactSet.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: conn,
    modelName: 'ArtifactSet',
    timestamps: false,
  }
);

module.exports = ArtifactSet;
