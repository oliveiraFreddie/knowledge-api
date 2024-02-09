require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const uri = process.env.mongo;
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        const msg = "ERRO! Não foi possível conectar com o MongoDB no projeto Inicial!";
        console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
    });

