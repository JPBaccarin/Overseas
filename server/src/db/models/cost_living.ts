import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";

const CostOfLiving = sequelize.define(
  "CostOfLiving",
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
    average_food_cost: DataTypes.FLOAT,
    average_transportation_cost: DataTypes.FLOAT,
    average_utilities_cost: DataTypes.FLOAT,
    average_entertainment_cost: DataTypes.FLOAT,
  },
  {
    timestamps: true,
  }
);

Country.hasMany(CostOfLiving, { foreignKey: "country_id" });
CostOfLiving.belongsTo(Country, { foreignKey: "country_id" });

export default CostOfLiving;
