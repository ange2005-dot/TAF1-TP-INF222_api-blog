const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blog",
      version: "1.0.0",
      description: "Documentation API blog"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsdoc(options);