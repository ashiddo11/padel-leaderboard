
module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("player", {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        username: {
        type: DataTypes.STRING,
        allowNull: false
        },
        level: {
        type: DataTypes.STRING,
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
        uniqueKeys: {
            Items_unique: {
              fields: ['username']
            }
          },
          indexes: [
            {
                unique: true,
                fields: ['username']
              },
            ]
    });
    return Player
}