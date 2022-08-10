const express  = require('express');
const router = express.Router();

var VideoID = ""

router.get('/youtube/main', (req,res) => {
    res.render("youtube/main.hbs");
});

router.get('/youtube/main', (req,res) => {
    res.render("youtube/main.hbs");
});
/*
router.get('/youtube/mostrarVideo', (req,res) =>{
    res.render('youtube/mostrarVideo');
});*/


router.post('/youtube/mostrarVideo', (req,res) =>{
    const {url}= req.body;
    console.log(url);
    VideoID = url.slice(32,43);
    console.log(VideoID);
    const myObj = {
        id: VideoID, 
      };
    res.render("youtube/mostrarVideo.hbs",myObj);
});

module.exports = router;