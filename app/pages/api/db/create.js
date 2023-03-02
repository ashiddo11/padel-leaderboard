
// const {Sequelize, DataTypes} = require("sequelize");
const { Sequelize, Model, DataTypes, Op, JSONB } = require('sequelize');
const db = require("../../../models");

export default async function handler(req, res) {

  const Player = require("../../../models/player")(db.sequelize, DataTypes)
  const Match = require("../../../models/match")(db.sequelize, DataTypes)
  const Result = require("../../../models/result")(db.sequelize, DataTypes)

  db.sequelize.sync({ force: false }).then(() => {
    console.log('Table created successfully!');
    res.status(200).json({ message: 'Tables created successfully!' })
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });
}
