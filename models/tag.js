const Message = require("./messages");

const Tag = (sequelize, DataTypes) => {
    const tag = sequelize.define("Message", {
        title: DataTypes.String,

    });
    Message.associate = function (models) {
        Tag.belongsToMany(Message, {
            foreignKey: "tag_id",
            targetKey: 'id'
        });
    };
}

module.exports = Tag;