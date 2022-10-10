import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Spectator school",
      version: "1.0.0",
      description: "Welcome to Spectator Schools - School and Parents effective communication",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Three Aces",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "/api/v1",
      },
      {
        url: "https://spectator-be.onrender.com/api/v1",
      }
    ],
    components: {
      securitySchemes: {
        BearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["src/**/*.doc.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;