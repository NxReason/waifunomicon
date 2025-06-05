const { Model, DataTypes } = require('sequelize');
const conn = require('./conn');
const Artifact = require('./Artifact');

class GICharacter extends Model {}

GICharacter.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: conn,
    modelName: 'GICharacter',
    timestamps: false,
  }
);

Artifact.belongsToMany(GICharacter, { through: 'GILoadout' });
GICharacter.belongsToMany(Artifact, { through: 'GILoadout' });

module.exports = GICharacter;
