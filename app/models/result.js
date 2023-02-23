
module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define("result", {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        match_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        username: {
        type: DataTypes.STRING,
        allowNull: false
        },
        outcome: {
        type: DataTypes.STRING,
        allowNull: false
        },
        score: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        partner: {
        type: DataTypes.STRING,
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
        timestamps: false,
        indexes: [
            {
                unique: false,
                fields: ['username']
              },
            ]
    });
    return Result
}