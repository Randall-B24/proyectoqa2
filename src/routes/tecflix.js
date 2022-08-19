const express  = require('express');
const router = express.Router();

router.get('/gestionBiblioteca', (req,res) => {
    res.render("gestionBiblioteca.hbs");
});

router.get('/prueba', (req,res) => {
    res.render("prueba.hbs");
});

router.get('/visualizacionBiblioteca', (req,res) => {
    res.render("visualizacionBiblioteca.hbs");
});


/*
router.post('/youtube/mostrarVideo', (req,res) =>{
    const {url}= req.body;
    console.log(url);
    res.render("youtube/mostrarVideo.hbs",{url});
});*/

module.exports = router;