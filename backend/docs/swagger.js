const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Assignment API",
      version: "1.0.0",
      description: "API documentation for authentication and task management",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // where route docs will live
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
