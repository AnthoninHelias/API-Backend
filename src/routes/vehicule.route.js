const router = require('express').Router();

const {
    getAllVehicules,
    getVehiculesById,
    createVehicules,
    updateVehiculesById,
    deleteVehiculesById

} = require('../controllers/vehicule.controller')

router.get('/', getAllVehicules);

router.get('/:id', getVehiculesById);

router.post('/create', createVehicules);

router.patch('/update/:id', updateVehiculesById);

router.delete('/delete/:id', deleteVehiculesById)

module.exports = router;
