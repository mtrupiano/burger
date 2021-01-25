const connection = require('./connection.js');

const ORM = {

    selectAll: ( callback ) => {
        connection.query("SELECT * FROM burgers", function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    },

    insertOne: ( table, cols, vals, callback ) => {
        const queryStr = 
            "INSERT INTO " + table + " (" + cols.toString(); + ") VALUES (DEFAULT, ?, ?)";

        connection.query(queryStr, vals, function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    },

    updateOne: ( burger_id, callback ) => {
        const queryStr = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryStr, burger_id, function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    }

}   

module.exports = ORM;