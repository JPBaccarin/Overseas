import { DataTypes } from 'sequelize';
import sequelize from '../config.ts';
import Country from './country.ts';

const Transportation = sequelize.define('Transportation', {
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
  public_transportation: DataTypes.TEXT,
  average_cost: DataTypes.FLOAT,
  driving_requirements: DataTypes.TEXT,
  ride_sharing_options: DataTypes.TEXT,
}, {
  timestamps: true,
});

Country.hasMany(Transportation, { foreignKey: 'country_id' });
Transportation.belongsTo(Country, { foreignKey: 'country_id' });

export default Transportation;
