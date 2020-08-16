// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Country = sequelize.define('country', {
    iso: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'country',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Country.associate = (models) => {
    Country.hasMany(models.office, {
      foreignKey: {
        name: 'countryIsoKey',
        field: 'country_iso',
      },
      target: {
        name: 'iso',
      },
      as: 'countryIsoOffices',
    });
    Country.hasMany(models.city, {
      foreignKey: {
        name: 'countryIsoKey',
        field: 'country_iso',
      },
      target: {
        name: 'iso',
      },
      as: 'countryIsoCities',
    });
  };

  return Country;
};