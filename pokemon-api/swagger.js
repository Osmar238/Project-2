const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Pokemon API',
    description: 'API para gestionar Pokémon y Entrenadores',
  },
  host: 'pokemon-project-axff.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);