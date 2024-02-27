const useurModel = require('../models/useur.model');
const {response} = require("express");

getAllUsers = (request, response) => {
    useurModel.getAllUsers((error, data) => {
        if (error) {
            console.log(error);
            response.status(500).send({
                message: "Une erreur est survenue lors de la récupération des utilisateurs"
            });
        } else {
            response.send(data);
        }
    });
}

getUsersById = (request, response) => {
    useurModel.getUsersById(request.params.id, (error, data) => {
        if (error) {
            console.log(error);
            response.status(500).send({
                message: "Une erreur est survenue lors de la récupération des utilisateurs"
            });
        } else {
            response.send(data);
        }
    });
}

module.exports = {getAllUsers, getUsersById};
