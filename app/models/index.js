const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
import {PostgresDialect} from '@sequelize/postgres';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

db.sequelize = sequelize;
module.exports = db;
