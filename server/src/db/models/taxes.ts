import { DataTypes } from "sequelize";
import sequelize from '../config.ts';
import Country from './country.ts';

const Taxes = sequelize.define(
  "Taxes",
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
    income_tax_rate: DataTypes.FLOAT,
    vat_rate: DataTypes.FLOAT,
    other_taxes: DataTypes.TEXT,
    tax_filing_process: DataTypes.TEXT,
  },
  {
    timestamps: true,
  }
);

Country.hasMany(Taxes, { foreignKey: "country_id" });
Taxes.belongsTo(Country, { foreignKey: "country_id" });

export default Taxes;
