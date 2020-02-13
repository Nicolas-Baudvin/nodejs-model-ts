require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION_LINK,
    {
        "useNewUrlParser": true,
        "useUnifiedTopology": true
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());

export default app;