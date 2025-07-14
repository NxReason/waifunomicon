export default (sequelize, DataTypes) => {
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

  ArtifactSet.associate = models => {
    ArtifactSet.belongsToMany(models.Character, {
      through: {
        model: 'Character_ArtifactSet',
        timestamps: false,
      },
      as: 'characters',
      foreignKey: 'artifactSetId',
    });
  };

  return ArtifactSet;
};
