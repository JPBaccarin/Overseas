import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";

const Taxes = sequelize.define(
  "taxes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country_id: {
      type: DataTypes.CHAR(36),
      references: {
        model: "Countries",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    income_tax_rate: DataTypes.FLOAT,
    sales_tax_rate: DataTypes.FLOAT,
    property_tax_rate: DataTypes.FLOAT,
    double_taxation_treaties: DataTypes.TEXT,
    tax_filing_process: DataTypes.TEXT,
  },
  {
    timestamps: true,
    freezeTableName: true,
  },
);

Country.hasMany(Taxes, { foreignKey: "country_id" });
Taxes.belongsTo(Country, { foreignKey: "country_id" });

export default Taxes;
