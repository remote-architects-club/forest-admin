// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Office = sequelize.define('office', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.literal('gen_random_uuid()'),
    },
    city: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    numPeople: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
    },
    remotePolicy: {
      type: DataTypes.STRING,
    },
    remoteSince: {
      type: DataTypes.DATE,
    },
    userId: {
      type: DataTypes.STRING,
    },
    latestExperience: {
      type: DataTypes.DATE,
    },
    publish: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    tableName: 'office',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Office.associate = (models) => {
    Office.belongsTo(models.city, {
      foreignKey: {
        name: 'cityIdKey',
        field: 'city_id',
      },
      as: 'linkedCity',
    });
    Office.belongsTo(models.country, {
      foreignKey: {
        name: 'countryIsoKey',
        field: 'country_iso',
      },
      target: {
        name: 'iso',
      },
      as: 'countryIso',
    });
    Office.belongsToMany(models.tool, {
      through: 'office_tool',
      foreignKey: 'office_id',
      otherKey: 'tool_id',
    });
    Office.hasMany(models.experience, {
      foreignKey: {
        name: 'officeIdKey',
        field: 'office_id',
      },
      as: 'experiences',
    });
    Office.hasMany(models.officeRevision, {
      foreignKey: {
        name: 'officeIdKey',
        field: 'office_id',
      },
      as: 'officeRevisions',
    });
  };

  return Office;
};
