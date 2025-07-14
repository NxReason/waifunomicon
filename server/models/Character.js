export default (sequelize, DataTypes) => {
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

  Character.associate = models => {
    Character.belongsToMany(models.ArtifactSet, {
      through: {
        model: 'Character_ArtifactSet',
        timestamps: false,
      },
      as: 'artifactSets',
      foreignKey: 'characterId',
    });
  };

  return Character;
};
