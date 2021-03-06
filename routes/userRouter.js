const userRouter = require('express').Router()
const models = require('../models')
const { Op } = require("sequelize");

userRouter.get("/users", async (req, res, next) => {
    const users = await models.User.findAll();
    res.send(users);
});

userRouter.post("/users", async (req, res, next) => {
    const { first_name, last_name, user_name, email, password, img } = req.body
    const userData = {
        first_name: first_name,
        last_name: last_name,
        user_name: user_name,
        email: email,
        password: password,
        img: img
    }

    models
        .User
        .findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { user_name: req.body.user_name }
                ]
            }
        })
        .then(user => {
            if (!user) {
                models
                    .User
                    .create(userData)
                    .then(userData => {
                        res.json({ status: `${userData.user_name} has been registred` })
                    })
                    .catch(err => res.send(err))
            }
            else {
                res.json('User already exists')
            }
        })

})

userRouter.get("/users/:id", async (req, res, next) => {
    const { id } = req.params
    console.log(id)
    models
        .User
        .findAll({
            where:
                { id: id }
        })
        .then(user => {
            if (user.id) {
                res.send(user)
            } else {
                res.send('No such user')
            }
        })
});

userRouter.get("/users/:id/messages", async (req, res, next) => {
    const { id } = req.params
    const messages = await models.Message.findAll({
        where: {
            author_id: id
        },
    });
    res.send(messages);
})

module.exports = userRouter;