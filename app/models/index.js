const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorsAliases: false,
});

const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.products = require("./product.model.js")(connex, Sequelize);
module.exports = db;