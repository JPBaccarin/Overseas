import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";

const JobMarket = sequelize.define(
  "job_market",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    country_id: {
      type: DataTypes.CHAR(36),
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
    timestamps: true,freezeTableName: true,
  },
);

Country.hasMany(JobMarket, { foreignKey: "country_id" });
JobMarket.belongsTo(Country, { foreignKey: "country_id" });

export default JobMarket;
