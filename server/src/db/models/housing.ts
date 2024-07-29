import { DataTypes } from 'sequelize';
import sequelize from '../config.ts';
import Country from './country.ts';

const Housing = sequelize.define('Housing', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  country_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Country,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  average_rent: DataTypes.FLOAT,
  average_property_price: DataTypes.FLOAT,
  popular_areas: DataTypes.TEXT,
  rental_process: DataTypes.TEXT,
  buying_process: DataTypes.TEXT,
}, {
  timestamps: true,
});

Country.hasMany(Housing, { foreignKey: 'country_id' });
Housing.belongsTo(Country, { foreignKey: 'country_id' });

export default Housing;
