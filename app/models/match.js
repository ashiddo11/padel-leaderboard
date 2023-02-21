
module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define("match", {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
        },
        winner_score: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        loser_score: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
        },
        updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
        }
    },{
        timestamps: false
    });
    return Match
}