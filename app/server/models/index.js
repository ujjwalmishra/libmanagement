"use strict";

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from './../config';
var basename  = path.basename(__filename);
var db = {};

// make bluebird default Promise
Promise = require('bluebird'); 

Sequelize.Promise = Promise;

//connect to sequelize using env variables
const database = config.db.DB;
const username = config.db.USER;
const password = config.db.PASSWORD;
const host = config.db.HOST;
const port = config.db.PORT;
const dialect = config.db.DIALECT;
const sequelize =  new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  operatorsAliases: false,
  // logging: false,
  pool: {
    max: 5, 
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

console.log(basename);
//Load all the models in the model directory
fs
  .readdirSync(path.join(__dirname, 'server', 'models'))
  .filter(file => {
    console.log(file);
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    console.log(file);
    var model = sequelize['import'](path.join(__dirname,'server', 'models', file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;