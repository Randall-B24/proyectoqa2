//Conexión con la base de datos
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "123456",
    database: "tecflix",
    connectionLimit: 5
});

//Exportación del módulo
module.exports = connection;