const router = require('express').Router();
const swaggerUI = require('swagger-ui-express');
const getConfigSwagger = require('../middleware/swagger');

router.use('/doc', swaggerUI.serve)
router.get('/doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = router;