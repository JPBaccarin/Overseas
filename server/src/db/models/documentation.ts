import { DataTypes } from "sequelize";
import sequelize from '../config.ts';
import Country from './country.ts';
const Documentation = sequelize.define(
  "Documentation",
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
    required_documents: DataTypes.TEXT,
    registration_process: DataTypes.TEXT,
    document_issuance: DataTypes.TEXT,
  },
  {
    timestamps: true,
  }
);

Country.hasMany(Documentation, { foreignKey: "country_id" });
Documentation.belongsTo(Country, { foreignKey: "country_id" });

export default Documentation;
