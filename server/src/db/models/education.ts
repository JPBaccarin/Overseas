import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";

const Education = sequelize.define(
  "education",
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
    average_cost: DataTypes.FLOAT,
    top_schools: DataTypes.TEXT,
    university_admission_process: DataTypes.TEXT,
    language_requirements: DataTypes.TEXT,
  },
  {
    timestamps: true,
    freezeTableName: true,
  },
);

Country.hasMany(Education, { foreignKey: "country_id" });
Education.belongsTo(Country, { foreignKey: "country_id" });

export default Education;
