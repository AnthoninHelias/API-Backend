const vehiculeModel = require('../models/vehicule.model');
const dataBase = require("../db/db-connection");


getAllVehicules = result_bdd_request => {
    dataBase.query('SELECT * FROM test_db.vehicules', (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}


getVehiculesById = (request, response) => {
    vehiculeModel.getVehiculesById(request.params.id, (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while retrieving Vehicules."
            });
        else
            response.send(data);
    });
};

createVehicules = (request, response) => {
    vehiculeModel.createVehicules(request.body, (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while creating Vehicules."
            });
        else
            response.send(data);
    });
}

updateVehiculesById = (request, response) => {
    vehiculeModel.updateVehiculesById(request.params.id, request.body, (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while updating Vehicules."
            });
        else
            response.send(data);
    });
}

deleteVehiculesById = (request, response) => {
    vehiculeModel.deleteVehiculesById(request.params.id, (error, data) => {
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while deleting Vehicules."
            });
        else
            response.send(data);
    });
}


module.exports = {
    getAllVehicules,
    getVehiculesById,
    createVehicules,
    updateVehiculesById,
    deleteVehiculesById

}