const router = require('express').Router();

const {
    getAllUsers,
    // getUsersById,
    // getUsersByName,
    // createUsers,
    // updateUsers,
    // deleteUsers
} = require('../controllers/user.controlller');

router.get('/', getAllUsers);
// router.get('/:id', getUsersById);
// router.get('/filter/:name', getUsersByName);
// router.post('/', createUsers);
// router.put('/:id', updateUsers);
// router.delete('/:id', deleteUsers);

module.exports = router;