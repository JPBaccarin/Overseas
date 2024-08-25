import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";
const Visa = sequelize.define(
  "Visa",
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
    type: DataTypes.STRING,
    requirements: DataTypes.TEXT,
    application_process: DataTypes.TEXT,
    processing_time: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    validity: DataTypes.STRING,
  },
  {
    timestamps: true,
  }
);

Country.hasMany(Visa, { foreignKey: "country_id" });
Visa.belongsTo(Country, { foreignKey: "country_id" });

export default Visa;
