const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(
    'leaderboard',
    'root',
    'password123',
     {
       host: 'database',
       dialect: 'mysql'
     }
   );

db.sequelize = sequelize;
module.exports = db;