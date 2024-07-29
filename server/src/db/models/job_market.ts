import { DataTypes } from "sequelize";
import sequelize from '../config.ts';
import Country from './country.ts';

const JobMarket = sequelize.define(
  "JobMarket",
  {
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
        key: "id",
      },
      onDelete: "CASCADE",
    },
    major_industries: DataTypes.TEXT,
    average_salary: DataTypes.FLOAT,
    unemployment_rate: DataTypes.FLOAT,
    work_permit_requirements: DataTypes.TEXT,
  },
  {
    timestamps: true,
  }
);

Country.hasMany(JobMarket, { foreignKey: "country_id" });
JobMarket.belongsTo(Country, { foreignKey: "country_id" });

export default JobMarket;
