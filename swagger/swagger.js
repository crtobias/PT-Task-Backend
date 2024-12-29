import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TaskApi',
      version: '1.0.0',
      description: 'Api for managing Task',
    },
    contact: {
        name: 'Tobias Gonzalez Arriola'
    },
    servers: [
        {
            url: 'https://pt-task-backend.onrender.com',
            description: 'Local Host '
        }
    ]
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);
export default specs;