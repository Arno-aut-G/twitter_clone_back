const express = require('express')
const messageRouter = require('express').Router()
const models = require('../models')

messageRouter.get("/messages", async (req, res, next) => {
    const messages = await models.Message.findAll();
    res.send(messages);
});

messageRouter.post("/messages", async (req, res, next) => {
    const messageData = {
        content: req.body.content,
        date: req.body.date,
        hashtags: req.body.hashtags,
        author_id: req.body.author_id
    }

    models
        .Message
        .create(messageData)
        .then(user => {
            res.json({ status: `${userData.user_name} has been registred` })
        })
        .catch(err => res.send(err))
})

messageRouter.get("/messages/:id", async (req, res, next) => {
    const { id } = req.params
    models
        .Message
        .findAll({
            where:
                { id: id }
        })
        .then(message => {
            if (message) {
                res.send(message)
            } else {
                res.json('No such message')
            }
        })
});

module.exports = messageRouter;