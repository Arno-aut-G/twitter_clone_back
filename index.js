const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
const userRouter = require('./routes/userRouter')
const messageRouter = require('./routes/messageRouter')
var port = process.env.PORT || 3002;
require('dotenv').config()


app.use(cors())
app.use(express.urlencoded())
app.use(userRouter)
app.use(messageRouter)

app.get('/', (req, res, next) => {
    res.send(
        <div>
            <h1>Routes:</h1>
            <p>GET https://protected-wave-89943.herokuapp.com/users</p>
            <p>GET https://protected-wave-89943.herokuapp.com/users/:id</p>
            <p>GET https://protected-wave-89943.herokuapp.com/users/:id/messages</p>
            <br />
            <p>POST https://protected-wave-89943.herokuapp.com/users</p>
            <br />
            <p>GET https://protected-wave-89943.herokuapp.com/messages</p>
            <p>GET https://protected-wave-89943.herokuapp.com/messages/:id</p>
            <br />
            <p>POST https://protected-wave-89943.herokuapp.com/messages</p>
        </div>
    )
})

models
    .sequelize
    .sync()
    .then(app.listen(port, console.log(`Server is running on port ${port}`)))