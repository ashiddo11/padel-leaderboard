const {Sequelize, DataTypes} = require("sequelize");
const db = require("../../../models");

export default async function handler(req, res) {
    const body = req.body
    const Player = require("../../../models/player")(db.sequelize, DataTypes)
    const Match = require("../../../models/match")(db.sequelize, DataTypes)
    const Result = require("../../../models/result")(db.sequelize, DataTypes)
    try {
        const players = await Player.bulkCreate([
            {username: body.winner1},
            {username: body.winner2},
            {username: body.loser1},
            {username: body.loser2}
        ], {ignoreDuplicates: true})
        const match = await Match.create({winner_score: body.winnerScore, loser_score: body.loserScore})
        console.log("match auto-generated ID:", match.id)
        const result = await Result.bulkCreate([
            {match_id: match.id, username: body.winner1, outcome: "Win", score: body.winnerScore, partner: body.winner2} ,
            {match_id: match.id, username: body.winner2, outcome: "Win", score: body.winnerScore, partner: body.winner1} ,
            {match_id: match.id, username: body.loser1, outcome: "Loss", score: body.loserScore, partner: body.loser2} ,
            {match_id: match.id, username: body.loser2, outcome: "Loss", score: body.loserScore, partner: body.loser1} 
        ])
        res.status(200).json({ success: true, message: `Match ${match.id} created successfully!`})
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: error})
    }
}