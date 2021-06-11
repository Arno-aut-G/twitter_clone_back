const messageRouter = require('express').Router()
const models = require('../models')

messageRouter.get("/messages", async (req, res, next) => {
    const messages = await models.Message.findAll();
    res.send(messages);
});

messageRouter.post("/messages", async (req, res, next) => {
    const { content, hashtags, author_id } = req.body;
    const messageData = {
        content: content,
        hashtags: hashtags,
        author_id: author_id
    }

    models
        .Message
        .create(messageData)
        .then(messageData => {
            res.send(`${messageData.id} has been added`)
        })
        .catch(err => res.send(err))
})

messageRouter.get("/messages/:id", async (req, res, next) => {
    const { id } = req.params
    models
        .Message
        .findOne({
            where:
                { id: id }
        })
        .then(message => {
            if (message) {
                res.send(message)
            } else {
                res.send('No such message')
            }
        })
});

module.exports = messageRouter;