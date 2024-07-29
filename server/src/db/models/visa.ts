import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";
const Visa = sequelize.define(
  "Visa",
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
