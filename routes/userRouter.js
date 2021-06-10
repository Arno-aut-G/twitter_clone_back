const express = require('express')
const userRouter = require('express').Router()
const models = require('../models')

userRouter.get("/users", async (req, res, next) => {
    const users = await models.User.findAll();
    res.send(users);
});

userRouter.post("/users", async (req, res, next) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        img: req.body.img
    }

    models
        .User 
        .findOne({
            where : {
            [Op.or]: [
                { email : req.body.email },
                { user_name: req.body.user_name }
              ]}
        })
        .then(user => {
            if(!user){
                    models
                    .User
                    .create(userData)
                    .then(user => {
                        res.json({status : `${userData.user_name} has been registred`})
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
    models
        .User
        .findAll({
            where: 
                {id: id}
        })
        .then(user => {
            if (user) {
                res.send(user)
            } else {
                res.json('No such user')
            }
        })
});

userRouter.get("/users/:id/messages", async (req, res, next) => {
    try {
            const { id } = req.params
            const user = await models.ChatRoom.findAll({
                where: {
                    id: id,
                },
            })
            const messages = await models.Message.findAll({
                where: {
                    author_id: id
                },
            });
            res.send(messages);
        } catch (error) {
            res.send('No messages of this user');
        }
})

module.exports = userRouter;