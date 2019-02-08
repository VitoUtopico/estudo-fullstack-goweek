const express = require('express')
const mongoose = require('mongoose')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cors = require('cors')

mongoose.connect('mongodb://curso-goweek:curso-goweek123@ds125385.mlab.com:25385/backend-goweek-testes',
    {
        useNewUrlParse: true
    }
)

app.use(cors())
app.use((req, res, next) => {
    req.io = io
    return next()
})

app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
    console.log('Server iniciado na porta 3000')
})