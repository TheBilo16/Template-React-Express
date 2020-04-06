const { Router } = require("express");
const app = Router();

//MongoDB
const mongodb = require("./connection");
mongodb("test");

//Routes
app.get("/api",(req,res) => {
    res.end("Welcome API REST");
})

module.exports = app;