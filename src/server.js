const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const getConfig = require('../middleware/swagger.middleware');
router.use('/doc', swaggerUi.serve);
router.get('/doc', swaggerUi.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest));
module.exports = router;