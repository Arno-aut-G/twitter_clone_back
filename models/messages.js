'use-strict'

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        content: DataTypes.STRING,
        date: DataTypes.DATE,
        hashtags: DataTypes.STRING,
        author_id: DataTypes.STRING,
    }, {
        timestamps: false
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

