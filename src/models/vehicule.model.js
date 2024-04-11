const dataBase = require('../db/db-connection.js');

const VehiculesConstructor = function (vehicules) {
    this.id = vehicules.id
    this.marque = vehicules.marque
    this.modele = vehicules.modele
    this.annee = vehicules.annee
    this.couleur = vehicules.couleur
    this.immatriculation = vehicules.immatriculation
};


getAllVehicules = result_bdd_request => {

    database.query("SELECT * FROM test_db.vehicules", (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response.rows);
    });
}

createVehicules = (newVehicules, result_bdd_request) => {
    const {marque, modele, annee, couleur, immatriculation} = newVehicules;

    database.query(
        "INSERT INTO test_db.vehicules (marque, modele, annee, couleur, immatriculation) VALUES ($1, $2, $3, $4, $5)",
        [marque, modele, annee, couleur, immatriculation],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            result_bdd_request(null, response.rows);
        }
    );
}

getVehiculesById = (id, result_bdd_request) => {
    dataBase.query('SELECT * FROM test_db.vehicules WHERE id = $1', [id], (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}


updateVehiculesById = (id, vehicules, result_bdd_request) => {
    const {marque, modele, annee, couleur, immatriculation} = vehicules;

    dataBase.query(
        "UPDATE test_db.vehicules SET marque = $1, modele = $2, annee = $3, couleur = $4, immatriculation = $5",
        [marque, modele, annee, couleur, immatriculation],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            result_bdd_request(null, response.rows);
        }
    );
}

deleteVehiculesById = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM test_db.vehicules WHERE id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response.rows);
    });
}


module.exports = {
    VehiculesConstructor,
    getAllVehicules,
    createVehicules,
    getVehiculesById,
    updateVehiculesById,
    deleteVehiculesById
}
