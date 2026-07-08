require("dotenv").config();

const express = require("express");

const tarefaRoutes = require("./routes/tarefaRoutes");

const app = express();

app.use(express.json());

app.use("/tarefas", tarefaRoutes);

module.exports = app;