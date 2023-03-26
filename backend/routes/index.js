var express = require('express');
var fflogs = require('../apis/fflogs.js');
var twitch;
import('../apis/twitch.mjs').then((mod)=>{twitch=mod;});

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/report/:id', (req, res, next)=>{
  fflogs.getReport(req.params.id, (data)=>{
    res.send(data);
  });
})

router.get('/vod/:id', (req, res, next)=>{
  twitch.api.videos.getVideoById(req.params.id).then((data)=>{
    res.send({
      title: data.title,
      publishDate: data.publishDate,
      creationDate: data.creationDate
    });
  });
})

module.exports = router;
