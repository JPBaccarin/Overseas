import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";
const Healthcare = sequelize.define(
  "healthcare",
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
    system_type: DataTypes.STRING, // Public, Private, Mixed
    insurance_requirements: DataTypes.TEXT,
    average_cost: DataTypes.FLOAT,
    hospitals_quality: DataTypes.TEXT,
    emergency_numbers: DataTypes.STRING,
  },
  {
    timestamps: true,
    freezeTableName: true,
  },
);

Country.hasMany(Healthcare, { foreignKey: "country_id" });
Healthcare.belongsTo(Country, { foreignKey: "country_id" });

export default Healthcare;
