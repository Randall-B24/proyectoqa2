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

router.get('/gestionMultimedia',  async (req,res) => {
    res.render("gestionMultimedia.hbs");
})

router.post('/gestionMultimedia/agregar', async (req,res) =>{
    const {linkName, idVideoName, emisorName, tituloName} = req.body;

    connection.query("insert into Multimedia values ("+"'"+idVideoName+"'"+"," + "'"+linkName+"'"+"," + "'"+tituloName+"'"+"," + "'"+emisorName+"'"+");", (err, rows) =>{
        if (err) throw err
        connection.end;
    })

    res.render("gestionMultimedia.hbs");
});


router.post('/gestionBiblioteca/agregar', async (req,res) =>{
    const {linkName, idVideoName, emisorName, tituloName, txtListaReproduccionAgregarName} = req.body;

    connection.query("insert into Lista_Video values ("+"'"+idVideoName+"'"+ "," + "'"+txtListaReproduccionAgregarName+"'"+");", (err, rows) =>{
        if (err) throw err
        connection.end;
    })

    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{
        if (err) throw err
        connection.end;
        res.render("gestionBiblioteca.hbs", {rows});
    })
});

router.post('/gestionBiblioteca/eliminar', async (req,res) =>{
    const {idVideoName, txtListaReproduccionEliminarName} = req.body;

    /* connection.query("insert into Multimedia values ("+"'"+idVideoName+"'"+"," + "'"+linkName+"'"+"," + "'"+tituloName+"'"+"," + "'"+emisorName+"'"+");", (err, rows) =>{
        if (err) throw err
        connection.end;
    })*/
    console.log(txtListaReproduccionEliminarName);
    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{
        if (err) throw err
        connection.end;
        res.render("gestionBiblioteca.hbs", {rows});
    })
});

router.post('/gestionBiblioteca/agregarPlaylist', async (req,res) =>{
    const {NombrePlaylist} = req.body;
    connection.query("insert into ListaReproduccion values ("+"'"+NombrePlaylist+"'"+");", (err, rows) =>{
        if (err) throw err
        connection.end;
    })
    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{
        if (err) throw err
        connection.end;
        res.render("gestionBiblioteca.hbs", {rows});
    })
});

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
    connection.query("Select LV.id_video, titulo from Lista_Video as LV JOIN ListaReproduccion as LR on LV.nombre_lista = LR.nombre JOIN Multimedia as M on M.id_video = LV.id_video WHERE nombre =" + "'" +playList +"'" +";", (err, rows) =>{
        if (err) throw err
        connection.end;
        res.render("visualizacionBiblioteca.hbs",{rows,playList});
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