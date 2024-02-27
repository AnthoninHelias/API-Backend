const dataBase = require('../db/db-connection');
const {createMochaInstanceAlreadyDisposedError} = require("mocha/lib/errors");

const UserConstructor = function (user) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.age = user.age;
}

getAllUsers = result_bdd_request => {
    dataBase.query('SELECT * FROM users', (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}

module.exports = {
    UserConstructor,
    getAllUsers
};
