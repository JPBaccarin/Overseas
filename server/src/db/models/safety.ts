import { DataTypes } from 'sequelize';
import sequelize from '../config.ts';
import Country from './country.ts';

const Safety = sequelize.define('Safety', {
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
  crime_rate: DataTypes.FLOAT,
  safety_tips: DataTypes.TEXT,
  emergency_services: DataTypes.TEXT,
}, {
  timestamps: true,
});

Country.hasMany(Safety, { foreignKey: 'country_id' });
Safety.belongsTo(Country, { foreignKey: 'country_id' });

export default Safety;
