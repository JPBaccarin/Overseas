import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('overseas', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
