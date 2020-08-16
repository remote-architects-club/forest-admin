// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Experience = sequelize.define('experience', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('gen_random_uuid()'),
    },
    ownExperienceText: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    ownExperience: {
      type: DataTypes.INTEGER,
    },
    company: {
      type: DataTypes.INTEGER,
    },
    wfh: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    hardware: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    colleagues: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tools: {
      type: DataTypes.INTEGER,
    },
    toolsText: {
      type: DataTypes.STRING,
    },
    companyText: {
      type: DataTypes.STRING,
    },
    notWfhReason: {
      type: DataTypes.INTEGER,
    },
    notWfhReasonText: {
      type: DataTypes.STRING,
    },
    finalTips: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    userIp: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'experience',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Experience.associate = (models) => {
    Experience.belongsTo(models.office, {
      foreignKey: {
        name: 'officeIdKey',
        field: 'office_id',
      },
      as: 'office',
    });
  };

  return Experience;
};
