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

// getUsersByName = (name, result_bdd_request) => {
//     dataBase.query('SELECT * FROM test_db.users WHERE username = $1', [name], (error, result) => {
//         if (error) {
//             result_bdd_request(error);
//         }
//         result_bdd_request(null, result);
//     });
// }


getAllUsers = result_bdd_request => {
    dataBase.query('SELECT * FROM test_db.users', (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}
getUsersById = (id, result_bdd_request) => {
    dataBase.query('SELECT * FROM test_db.users WHERE id = $1', [id], (error, result) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, result);
    });
}


createUser = (user, result_bdd_request) => {
    const {username, password, first_name, last_name, email, age} = user;

    database.query(
        "INSERT INTO test_db.user (username,password,first_name,last_name,email,age) VALUES ($1, $2, $3, $4, $5, $6)",
        [username, password, first_name, last_name, email, age],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            result_bdd_request(null, response.rows);
        }
    );
}


updateUser = (id, user, result_bdd_request) => {
    const {username, password, first_name, last_name, email, age} = user;

    dataBase.query(
        "UPDATE test_db.user SET username = $1, password = $2, first_name = $3, last_name = $4, email = $5, age = $6 WHERE id = $7",
        [username, password, first_name, last_name, email, age, id],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            result_bdd_request(null, response.rows);
        }
    );
}


deleteUser = (id, result_bdd_request) => {
    dataBase.query("DELETE FROM test_db.user WHERE id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        result_bdd_request(null, response.rows);
    });
}

module.exports = {
    UserConstructor,
    getAllUsers,
    getUsersById,
    updateUser,
    deleteUser,
    createUser,
    /* getUsersByName*/
};
