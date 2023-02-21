const {Sequelize, DataTypes} = require("sequelize");
const db = require("../../../models");

export default async function handler(req, res) {
    const body = req.body
    const Booking = require("../../../models/player")(db.sequelize, DataTypes)
    console.log("trying")
    try {
        const booking = await Booking.create({ pitchId: body.pitchId, startTime: body.startTime, playersCount: body.playersCount, total: body.total });
        console.log("booking's auto-generated ID:", booking.id);
        res.status(200).json({ success: true, message: `Booking ${booking.id} created successfully!`})
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, error: error})
    }
}