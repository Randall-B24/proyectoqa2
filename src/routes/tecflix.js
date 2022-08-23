const express  = require('express');
const router = express.Router();
const connection = require("../database");

connection.connect( (err) =>{
    if (err) throw err
    console.log("La conexion funciona...")
})

router.get('/gestionBiblioteca', (req,res) => {
    res.render("gestionBiblioteca.hbs");
});

router.get('/prueba', (req,res) => {
    res.render("prueba.hbs");
});

/*
router.get('/visualizacionBiblioteca', async (req,res) => {
    res.render("visualizacionBiblioteca.hbs",{datos});
});*/

router.get('/visualizacionBiblioteca', async (req,res) => {
    connection.query('SELECT * from Multimedia', (err, rows) =>{
        if (err) throw err
        connection.end;
        //console.log(rows[0].emisor);
        res.render("visualizacionBiblioteca.hbs",{rows});
    })
});

/*
connection.query("Select * from Multimedia", (err, rows) =>{
    if (err) throw err
    console.log(rows)
})*/




/*
router.post('/youtube/mostrarVideo', (req,res) =>{
    const {url}= req.body;
    console.log(url);
    res.render("youtube/mostrarVideo.hbs",{url});
});*/

module.exports = router;