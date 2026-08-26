require("dotenv").config();

const express = require("express");
const cors = require('cors');

const tarefaRoutes = require("./routes/tarefaRoutes");
const app = express();

app.use(cors());
app.use(express.json());


app.use("/tarefas", tarefaRoutes);

module.exports = app;