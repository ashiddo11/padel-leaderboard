const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
import {PostgresDialect} from '@sequelize/postgres';

const sequelize = new Sequelize('neondb', 'neondb_owner', 'Gk9UKJvOPcx0', {
  host: 'ep-weathered-rice-a2sx4zuf-pooler.eu-central-1.aws.neon.tech',
  dialect: PostgresDialect,
});

db.sequelize = sequelize;
module.exports = db;
