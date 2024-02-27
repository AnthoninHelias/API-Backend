const dataBase = require('../db/db-connection.js');

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
    dataBase.query('SELECT * FROM test_db.users', (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}
getUsersById = (id, result_bdd_request) => {
    dataBase.query('SELECT * FROM test_db.users WHERE id = ${:id}', id, (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}

module.exports = {
    UserConstructor,
    getAllUsers,
    getUsersById
};
