const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: '192.168.1.24',
        port: 3306,
        user: 'newuser',
        password: 'G1g@sequelpass',
        database: 'burgers_db'
    });
}

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;