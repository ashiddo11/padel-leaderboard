const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
import {PostgresDialect} from '@sequelize/postgres';

const sequelize = new Sequelize('neondb', 'neondb_owner', 'dg21fElUzkDX', {
  host: 'ep-rough-bird-a2pndvo7-pooler.eu-central-1.aws.neon.tech',
  dialect: PostgresDialect,
});

db.sequelize = sequelize;
module.exports = db;
