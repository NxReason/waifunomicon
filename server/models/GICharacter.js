const { Model, DataTypes } = require('sequelize');
const conn = require('./conn');

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

module.exports = GICharacter;
