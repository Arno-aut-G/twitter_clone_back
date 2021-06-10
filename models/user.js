'use-strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        img: DataTypes.STRING
    }, {
        timestamps: false
    })
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.messages, {
          foreignKey: "author_id",
          sourceKey: "id",
        });
      };

    return User
}
