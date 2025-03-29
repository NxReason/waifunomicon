const { Model, DataTypes } = require('sequelize');
const conn = require('./conn');
const ArtifactSet = require('./ArtifactSet');

const ARTIFACT_SLOTS = ['Flower', 'Feather', 'Sands', 'Goblet', 'Mask'];

class Artifact extends Model {}

Artifact.init(
  {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },

    slot: {
      type: DataTypes.ENUM(ARTIFACT_SLOTS),
      allowNull: false,
    },

    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20,
      validate: {
        min: 1,
        max: 20,
      },
    },
  },
  {
    sequelize: conn,
    modelName: 'Artifact',
    timestamps: false,
  }
);

ArtifactSet.hasMany(Artifact, {
  foreignKey: 'artifactSetId',
});
Artifact.belongsTo(ArtifactSet, {
  foreignKey: 'artifactSetId',
});

module.exports = Artifact;
