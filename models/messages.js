'use-strict'

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashtags: DataTypes.STRING,
    }, {
        timestamps: true
    })
    Message.associate = function (models) {
        // associations can be defined here
        Message.belongsTo(models.User, {
            foreignKey: 'author_id',
            targetKey: 'id'
        });
    };
    // Message.associate = function (models) {
    //     Message.belongsToMany(models.Tag, {
    //         through: "message_tag",
    //         as: "tag",
    //         foreignKey: "message_id"
    //     });
    // };
    return Message
}

