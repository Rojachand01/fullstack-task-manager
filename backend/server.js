const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

// start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
