import Sequelize from 'sequelize';
import models from './models';


models.sequelize
  .authenticate()
  .then(() => {
    console.log('SQL Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the SQL database:');
  });

export default models;