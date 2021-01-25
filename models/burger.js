// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function (callback) {
        orm.selectAll( function (results) {
            callback(results);
        });
    },

    create: function (cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(results) {
            callback(results);
        });
    },

    update: function (objColVals, condition, callback) {
        orm.updateOne(function() {

        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;