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
            "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (DEFAULT, ?)";
        console.log(vals);
        connection.query(queryStr, vals, function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    },

    updateOne: ( col, val, condition, callback ) => {
        const queryStr = 
            "UPDATE burgers SET devoured = " + condition + 
            " WHERE " + col.toString() + " = ?";
        connection.query(queryStr, val, function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    }

}   

module.exports = ORM;