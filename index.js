const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
const userRouter = require('./routes/userRouter')
const messageRouter = require('./routes/messageRouter')
const port = 3002;
require('dotenv').config()


app.use(cors())
app.use(express.urlencoded())
app.use(userRouter)
app.use(messageRouter)

app.get('/', (req, res, next) => {
    res.send('BAckend-team, wohooooo')
})

models
    .sequelize
    .sync()
    .then(app.listen(port, console.log(`Server is running on port ${port}`)))