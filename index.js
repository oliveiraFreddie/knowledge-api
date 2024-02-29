const express = require("express");
const consign = require("consign");
const db = require("./config/db");
const mongoose = require("mongoose");

require("./config/mongodb");
const app = express(); // Alteração aqui

app.db = db;
app.mongoose = mongoose;

const port = process.env.PORT || 3000;

consign()
    .include("./config/passport.js")
    .then("./config/middlewares.js")
    .then("./api/validation.js")
    .then("./api")
    .then("./schedule")
    .then("./config/routes.js")
    .into(app);


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Backend INICIAL executando na porta ${port}...`);
});
