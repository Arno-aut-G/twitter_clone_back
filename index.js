require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
const { urlencoded } = require('express')
const port = process.env.PGPORT || 3002;

app.use(cors())
app.use(express.urlencoded)
app.use(userRouter)
app.use(MessageRouter)




/* ---> move this to userRouter? */


models
    .sequelize
    .sync()
    .then(app.listen(port, console.log(`Server is running on port ${port}`)))