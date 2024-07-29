import { DataTypes } from 'sequelize';
import sequelize from '../config.ts';
import Country from './country.ts';

const SocialConnections = sequelize.define('SocialConnections', {
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
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  expat_communities: DataTypes.TEXT,
  local_meetups: DataTypes.TEXT,
  online_forums: DataTypes.TEXT,
}, {
  timestamps: true,
});

Country.hasMany(SocialConnections, { foreignKey: 'country_id' });
SocialConnections.belongsTo(Country, { foreignKey: 'country_id' });

export default SocialConnections;
