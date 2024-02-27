const swaggerJsDoc = require('swagger-jsdoc');
const swaggerGeneration = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
                url: 'http://localhost:8085/',
                description: 'Development server',
            },
        ],

    },
    apis: ['./src/routes/*.js']
};

const swaggerOptions = swaggerJsDoc(swaggerGeneration);