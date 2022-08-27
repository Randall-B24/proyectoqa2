const express  = require('express');
const router = express.Router();
const connection = require("../database");

connection.connect( (err) =>{
    if (err) throw err
    console.log("La conexion funciona...")
})

router.get('/gestionBiblioteca',  async (req,res) => {
    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{
        if (err) throw err
        connection.end;
        res.render("gestionBiblioteca.hbs", {rows});
    })
})

router.get('/prueba', (req,res) => {
    res.render("prueba.hbs");
});

router.get('/prueba2', async (req,res) =>{
    res.render("prueba2.hbs");
});

router.get('/listasReproduccion', async (req,res) =>{
    res.render("listasReproduccion.hbs");
});

router.post('/listasReproduccion/buscar', async (req,res) =>{
    const {playList} = req.body;
    console.log(playList);
    connection.query("Select id_video from Lista_Video JOIN ListaReproduccion on id_video = Lista_Video.id_video where nombre =" + "'" +playList +"'" +";", (err, rows) =>{
        if (err) throw err
        connection.end;
        res.render("listasReproduccion.hbs",{rows});
    })
});

router.get('/visualizacionBiblioteca', async (req,res) =>{
    res.render("visualizacionBiblioteca.hbs");
});

router.post('/visualizacionBiblioteca/buscar', async (req,res) =>{
    const {playList} = req.body;
    console.log(playList);
    connection.query("Select id_video from Lista_Video JOIN ListaReproduccion on id_video = Lista_Video.id_video where nombre =" + "'" +playList +"'" +";", (err, rows) =>{
        if (err) throw err
        connection.end;
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