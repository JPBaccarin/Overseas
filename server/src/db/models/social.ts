import { DataTypes } from "sequelize";
import sequelize from "../config.ts";
import Country from "./country.ts";

const SocialConnections = sequelize.define(
  "social_connections",
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
    expat_communities: DataTypes.TEXT,
    social_groups: DataTypes.TEXT,
    local_events: DataTypes.TEXT,
  },
  {
    timestamps: true,freezeTableName: true,
  },
);

Country.hasMany(SocialConnections, { foreignKey: "country_id" });
SocialConnections.belongsTo(Country, { foreignKey: "country_id" });

export default SocialConnections;
