const express = require('express')
const app = express()
const dotenv = require('dotenv')

const getConfigSwagger = require('./middleware/swagger.js')

dotenv.config()


const server = app.listen(8085, function () {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://localhost:8085', host, port)
})

app.use(express.json());
app.set('json spaces', 2);

const useurRouter = require('./routes/useur.route');
const vehiculeRouter = require('./routes/vehicule.route')
const {serve} = require("swagger-ui-express");
//const {getUsersByName} = require("./controllers/user.controlller");
//const docRoute = require('./middleware/swagger');

app.use('/useur', useurRouter);
app.use('/vehicule', vehiculeRouter);
//app.use('/doc', docRoute);


module.exports = {app, server};


