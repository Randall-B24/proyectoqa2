/*
Importe de las modulos que se van a implementar
*/

const express  = require('express');
const router = express.Router();
const connection = require("../database");

connection.connect( (err) =>{ 
    if (err) throw err
    console.log("La conexion funciona...")
})

// Redirección a la página

router.get('/gestionBiblioteca',  async (req,res) => {
    var rows1;
    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        rows1 = rows;
        connection.query('Select id_video from Multimedia;', (err, rows2) =>{ // Consulta a base de datos
            if (err) throw err
            connection.end;
            res.render("gestionBiblioteca.hbs", {rows1,rows2}); // Renderización a página con los datos seleccionados
        })
    })
})

// Redirección a la página

router.get('/gestionMultimedia',  async (req,res) => {
    res.render("gestionMultimedia.hbs");
})

/*
Método post a página 
*/

router.post('/gestionMultimedia/agregar', async (req,res) =>{
    var validar = 1;
    const {linkName, idVideoName, emisorName, tituloName} = req.body; // Definición del cuerpo del body

    connection.query("insert into Multimedia values ("+"'"+idVideoName+"'"+"," + "'"+linkName+"'"+"," + "'"+tituloName+"'"+"," + "'"+emisorName+"'"+");", (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
    })

    res.render("gestionMultimedia.hbs", {validar});
});


/*
Método post a página 
*/

router.post('/gestionBiblioteca/agregar', async (req,res) =>{
    var rows1;
    var validar = 1;
    const {txtIdVideoAgregarName, txtListaReproduccionAgregarName} = req.body; // Definición del cuerpo del body
    connection.query("insert into Lista_Video values ("+"'"+txtIdVideoAgregarName+"'"+ "," + "'"+txtListaReproduccionAgregarName+"'"+");", (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
    })

    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        rows1 = rows;
        connection.query('Select id_video from Multimedia;', (err, rows2) =>{ // Consulta a base de datos
            if (err) throw err
            connection.end;
            res.render("gestionBiblioteca.hbs", {rows1,rows2, validar}); // Renderización a página con los datos seleccionados
        });
    })
});

/*
Método post a página 
*/

router.post('/gestionBiblioteca/eliminar', async (req,res) =>{
    var rows1;
    var validar =2;
    const {txtIdVideoEliminarName, txtListaReproduccionEliminarName} = req.body; // Definición del cuerpo del body

    connection.query("Delete from Lista_Video where id_video ="+"'"+txtIdVideoEliminarName+"'"+ "and nombre_lista = " +"'"+txtListaReproduccionEliminarName+"'"+";", (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
    })

    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        rows1 = rows;
        connection.query('Select id_video from Multimedia;', (err, rows2) =>{ // Consulta a base de datos
            if (err) throw err
            connection.end;
            res.render("gestionBiblioteca.hbs", {rows1,rows2, validar}); // Renderización a página con los datos seleccionados
        });
    })
});


/*
Método post a página 
*/

router.post('/gestionBiblioteca/agregarPlaylist', async (req,res) =>{
    const {NombrePlaylist} = req.body; // Definición del cuerpo del body
    connection.query("insert into ListaReproduccion values ("+"'"+NombrePlaylist+"'"+");", (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
    })
    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        rows1 = rows;
        connection.query('Select id_video from Multimedia;', (err, rows2) =>{ // Consulta a base de datos
            if (err) throw err
            connection.end;
            res.render("gestionBiblioteca.hbs", {rows1,rows2}); // Renderización a página con los datos seleccionados
        });
    })

});

// Redirección a la página

router.get('/listasReproduccion',  async (req,res) => {
    var lista="Null";
    connection.query('SELECT nombre from ListaReproduccion;', (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        res.render("listasReproduccion.hbs",{lista}); // Renderización a página con los datos seleccionados
    })
})

/*
Método post a página 
*/

router.post('/listasReproduccion/buscar', async (req,res) =>{
    var lista = "";
    const {playList} = req.body; // Definición del cuerpo del body
    connection.query("Select LV.id_video, titulo from Lista_Video as LV JOIN ListaReproduccion as LR on LV.nombre_lista = LR.nombre JOIN Multimedia as M on M.id_video = LV.id_video WHERE nombre =" + "'" +playList +"'" +";", (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        for (var i= 0; i < rows.length; i++){
            lista = lista + rows[i].id_video;
        }
        res.render("listasReproduccion.hbs",{rows,lista}); // Renderización a página con los datos seleccionados
    })
});

// Redirección a la página

router.get('/visualizacionBiblioteca', async (req,res) =>{
    res.render("visualizacionBiblioteca.hbs");
});


/*
Método post a página 
*/

router.post('/visualizacionBiblioteca/buscar', async (req,res) =>{
    const {playList} = req.body; // Definición del cuerpo del body
    connection.query("Select LV.id_video, titulo from Lista_Video as LV JOIN ListaReproduccion as LR on LV.nombre_lista = LR.nombre JOIN Multimedia as M on M.id_video = LV.id_video WHERE nombre =" + "'" +playList +"'" +";", (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        res.render("visualizacionBiblioteca.hbs",{rows,playList}); // Renderización a página con los datos seleccionados
    })
});

// Redirección a la pagina de todos los multimedias

router.get('/gestionMultimedia/VerMultimedia',  async (req,res) => {
    connection.query('SELECT id_video from Multimedia', (err, rows) =>{ // Consulta a base de datos
        if (err) throw err
        connection.end;
        console.log(rows);
        res.render("verMultimedia.hbs",{rows}); // Renderización a página con los datos seleccionados
    })
})


/*
Importe del modulo
*/

module.exports = router;