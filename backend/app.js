require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

require("./config/db");

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

module.exports = app;