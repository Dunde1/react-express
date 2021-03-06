"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = "development";
const config = require(path.join(__dirname + "../../../config/database_config.json"))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname + "/models")
  .forEach(file => {
    const model = require(path.join(__dirname, "/models", file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
