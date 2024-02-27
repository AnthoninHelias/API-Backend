const swaggerJsdoc = require('swagger-jsdoc');
const swaggerGenerator = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '0.1.0'
        },
        servers: [
            {
                url: 'http://localhost:8080'
            }
        ]
    },
    apis: ['./routes/*.js']
};
const swaggerOptions = swaggerJsdoc(swaggerGenerator);