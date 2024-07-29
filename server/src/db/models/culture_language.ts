import { DataTypes } from "sequelize";
import sequelize from '../config.ts';
import Country from './country.ts';

const CultureAndLanguage = sequelize.define(
  "CultureAndLanguage",
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
    official_languages: DataTypes.TEXT,
    common_languages: DataTypes.TEXT,
    cultural_norms: DataTypes.TEXT,
    public_holidays: DataTypes.TEXT,
  },
  {
    timestamps: true,
  }
);

Country.hasMany(CultureAndLanguage, { foreignKey: "country_id" });
CultureAndLanguage.belongsTo(Country, { foreignKey: "country_id" });

export default CultureAndLanguage;
