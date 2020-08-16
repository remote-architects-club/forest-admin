// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const City = sequelize.define('city', {
    name: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.DOUBLE,
    },
    lng: {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'city',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  City.associate = (models) => {
    City.belongsTo(models.country, {
      foreignKey: {
        name: 'countryIsoKey',
        field: 'country_iso',
      },
      target: {
        name: 'iso',
      },
      as: 'countryIso',
    });
    City.hasMany(models.office, {
      foreignKey: {
        name: 'cityIdKey',
        field: 'city_id',
      },
      as: 'offices',
    });
  };

  return City;
};
