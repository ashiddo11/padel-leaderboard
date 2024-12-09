const {Sequelize, DataTypes} = require("sequelize");
const db = require("../../../models");

export default async function handler(req, res) {
    const Result = require("../../../models/result")(db.sequelize, DataTypes)

    try {
        var results = await Result.findAll({attributes: [
            'username',
            [db.sequelize.fn('sum', db.sequelize.col('score')), 'total_score'],
            [db.sequelize.fn('count', db.sequelize.col('username')), 'total_matches'],
          ],
          group: ['username'],
          order: [['total_score', 'DESC']]
        })
        res.status(200).json({success: true, results: results})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}