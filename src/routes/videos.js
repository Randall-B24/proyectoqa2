const express  = require('express');
const router = express.Router();

router.get('/videos', (req,res) => {
    res.send("videos");
});

module.exports = router;