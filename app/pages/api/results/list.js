const {Sequelize, DataTypes} = require("sequelize");
const db = require("../../../models");

export default async function handler(req, res) {
    const Booking = require("../../../models/players")(db.sequelize, DataTypes)

    try {
        const bookings = await Booking.findAll()
        res.status(200).json({ bookings: bookings })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
}