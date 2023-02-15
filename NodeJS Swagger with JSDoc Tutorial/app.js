const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const PORT = process.env.PORT || 4000;

// Extended https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Swagger Tutorial API",
      description: "Information about my Swagger Tutorial for API'S.",
      contact: {
        name: "Web Developer",
      },
    },
    servers: ["http://localhost:4000"],
  },
  // [".routes/*.js"]
  apis: ["app.js"],
};

// Creating the swaggerDocs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// Using Swagger UI
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *   description: Use to request all customers.
 *   responses:
 *    "200":
 *     description: A successful response.
 *
 *
 *
 */

/**
 * @swagger
 * /customer/:id:
 *  put:
 *   description: Use to update a customer.
 *   responses:
 *    "201":
 *     description: A successful response.
 *
 *
 *
 */

app.get("/customers", (req, res) => {
  res.send("Customer results.");
});

app.put("/customer/:id", (req, res) => {
  res.send("Successfully updated customer.");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
