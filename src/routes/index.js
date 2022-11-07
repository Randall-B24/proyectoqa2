/*
Importe de las modulos que se van a implementar
*/
const express  = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("index.hbs");
});

/*
Importe del modulo
*/
module.exports = router;