const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'ventura_laravel', // database
  'root', // user
  'root', // password
  // options
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
