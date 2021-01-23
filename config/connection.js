const mysql = require('mysql');

const connection = mysql.connect({
    host: '192.168.1.24',
    port: 3306,
    user: 'newuser',
    password: 'G1g@sequelpass',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;