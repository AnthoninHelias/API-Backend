const dotenv = require('dotenv')

dotenv.config()

const {Client} = require('pg')

const client = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.PORT
})

client.connect();
console.log("Connecté");

module.exports = client;

