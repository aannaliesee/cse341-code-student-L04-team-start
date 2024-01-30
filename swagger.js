const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'My API',
        description: 'Documentation for Temple API',
    },
    host: 'localhost:8080',
    schemes: ['http'],
};   

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);