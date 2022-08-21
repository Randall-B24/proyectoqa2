const  {createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user:"root",
    password: "root",
    database: "tecflix",
    connectionLimit: 5
});

pool.query("select link from Multimedia", (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

