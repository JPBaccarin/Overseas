import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";

const Safety = sequelize.define(
  "safety",
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
    crime_rate: DataTypes.FLOAT,
    safety_tips: DataTypes.TEXT,
    emergency_contacts: DataTypes.TEXT,
    safe_areas: DataTypes.TEXT,
  },
  {
    timestamps: true,freezeTableName: true,
  },
);

Country.hasMany(Safety, { foreignKey: "country_id" });
Safety.belongsTo(Country, { foreignKey: "country_id" });

export default Safety;
