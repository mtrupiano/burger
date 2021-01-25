const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get("/", function (request, response) {
    burger.all( function(data) {
        response.render("index", { burgers: data });
    });
});

router.post("/api/burgers/:name", function(request, response) {
    burger.create(["id", "burger_name"], request.params.name, function(result) {
        response.json( {id: result.id} );
    });
});

router.put("/api/burgers/:id", function (request, response) {
    burger.update("id", request.params.id, true, function (result) {
        if (result.affectedRows > 0) {
            response.status(200).end();
        } else {
            return res.status(404).end();
        }
    });
});

module.exports = router;