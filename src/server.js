const router = require('express').Router()
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const app = express()
const dotenv = require('dotenv')

const getConfigSwagger = require('./middleware/swagger.js')

dotenv.config()

const {Client} = require('pg')

const client = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.PORT
})

client.connect()
console.log("Connecté")

const server = app.listen(8085, function () {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://localhost:8085', host, port)
})

app.use('/doc', swaggerUI.serve)
app.get('/doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = router