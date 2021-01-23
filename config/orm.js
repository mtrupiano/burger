const connection = require('./connection.js');

class ORM {

    selectAll( callback ) {
        connection.query("SELECT * FROM burgers", function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    }

    insertOne(burger_name, devoured) {
        connection.query("INSERT INTO burgers VALUES (DEFAULT, ?, ?)", [burger_name, devoured], function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    }

    updateOne(burger_id) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", burger_id, function (err, results, fields) {
            if (err) throw err;

            callback(results);
        });
    }

}   

module.exports = ORM;