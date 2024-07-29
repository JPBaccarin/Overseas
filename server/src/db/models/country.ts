import { DataTypes } from 'sequelize';
import sequelize from '../config.ts';
const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  iso_code: {
    type: DataTypes.STRING(3),
    unique: true,
    allowNull: false,
  },
  continent: DataTypes.STRING,
  capital: DataTypes.STRING,
  official_language: DataTypes.STRING,
  currency: DataTypes.STRING,
  population: DataTypes.INTEGER,
  area: DataTypes.FLOAT,
}, {
  timestamps: true,
});

export default Country;
