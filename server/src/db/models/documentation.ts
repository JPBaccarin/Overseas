import { DataTypes } from "sequelize";
import sequelize from '../config.ts';
import Country from './country.ts';
const Documentation = sequelize.define(
  "documentation",
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
    required_documents: DataTypes.TEXT,
    registration_process: DataTypes.TEXT,
    document_issuance: DataTypes.TEXT,
  },
  {
    timestamps: true,freezeTableName: true,
  }
);

Country.hasMany(Documentation, { foreignKey: "country_id" });
Documentation.belongsTo(Country, { foreignKey: "country_id" });

export default Documentation;
