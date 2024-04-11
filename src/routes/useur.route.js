const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    //getUsersByName,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controlller');

router.get('/', getAllUsers);
router.get('/:id', getUsersById);
//router.get('/filter/:name', getUsersByName);
router.post('/c/', createUser);
router.put('/u/:id', updateUser);
router.delete('/d/:id', deleteUser);

module.exports = router;