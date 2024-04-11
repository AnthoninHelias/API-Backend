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

// getUsersByName = (request, response) => {
//     useurModel.getUsersByName(request.params.name, (error, data) => {
//         if (error) {
//             console.log(error);
//             response.status(500).send({
//                 message: "Une erreur est survenue lors de la récupération des utilisateurs"
//             });
//         } else {
//             response.send(data);
//         }
//     });
//
// }


createUser = (request, response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new user.model.UserConstructor({
        id: request.body.id,
        username: request.body.username,
        password: request.body.password,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        age: request.body.age
    });

    useurModel.createUser(user, (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while creating the user."
            });
        else
            response.send(data);
    });
}

updateUser = (request, response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }

    useurModel.updateUser(request.params.id, new useurModel.UserConstructor(request.body), (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while updating the user."
            });
        else
            response.send(data);
    });
}
deleteUser = (request, response) => {
    useurModel.deleteUser(request.params.id, (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while deleting the user."
            });
        else
            response.send(data);
    });
}


module.exports = {getAllUsers, getUsersById, createUser, updateUser, deleteUser /*getUsersByName*/};
