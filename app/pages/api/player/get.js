const {Sequelize, DataTypes, Op} = require("sequelize");
const db = require("../../../models");

export default async function handler(req, res) {
    const Result = require("../../../models/result")(db.sequelize, DataTypes)
    const query = req.query
    const { username } = query
    console.log(query)
    try {
        var results = await Result.findAll({attributes: [
            'username',
            [db.sequelize.fn('sum', db.sequelize.col('score')), 'total_score'],
            [db.sequelize.fn('count', db.sequelize.col('username')), 'total_matches'],
          ],
          where: {
              username: username,
          },
          group: ['username'],
          order: [['total_score', 'DESC']]
        })
        var match_results = await Result.findAll({attributes: [
            'username',
            'outcome',
            'match_id',
            'partner',
            'score',
            'created_at',
            ],
            where: {
                username: username,
            },
            limit: 5,
            order: [['created_at', 'DESC']]
        })
        var match_results_data = {}
        var opponents_match_ids = []
        var partners = []
        match_results.forEach(function (result, i) {
            match_results_data[result.dataValues.match_id] = {...result.dataValues}
            opponents_match_ids.push(result.dataValues.match_id)
            partners.push(result.dataValues.partner)
        });
        var opponent_results = await Result.findAll({attributes: [
            'username',
            'score',
            'match_id',
            ],
            where: {
                match_id: opponents_match_ids,
                username: {[Op.ne]: username}
            },
            order: [['created_at', 'DESC']]
        })
        opponent_results.forEach(function (op_result, j) {
            match_results.forEach(function (match_result, i) {
                if (match_results[i].dataValues.match_id == op_result.dataValues.match_id) {
                    match_results[i].dataValues['opponents'] = match_results[i].dataValues['opponents'] || []
                    if ((match_results[i].dataValues.opponents.indexOf(op_result.dataValues.username) < 0) && (op_result.dataValues.username !== match_results[i].dataValues.partner)) {
                        console.log(op_result.dataValues.username)
                        match_results[i].dataValues.opponents.push(op_result.dataValues.username)
                        match_results[i].dataValues.loserScore = op_result.dataValues.score
                    }
                }
            })
        })
        res.status(200).json({success: true, player: results, match_results: match_results, match_results_data: match_results_data})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}