import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('DB', 'root', 'vg5g941z', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;