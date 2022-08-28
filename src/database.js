const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "root",
    database: "tecflix",
    connectionLimit: 5
});

module.exports = connection;