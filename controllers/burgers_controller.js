const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

burger.get("/", function (req, res) {
    burger.all( function(data) {
        res.render("index", { burgers: data });
    });
});

burger.post("/api/burgers/:name", function(req, response) {
    burger.create("name", req.body.name, function(result) {
        response.json( {id: result.id} );
    });
});

module.exports = router;