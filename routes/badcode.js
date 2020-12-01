var express = require('express');
var router = express.Router();

sleepTime = process.env.SLEEP_TIME || 200

router.get('/', function(req, res, next) {
  msleep(sleepTime)
  var i = 0;
  var x = 0.0001;
  while (i < 1000000) {
    i++;
    $x += sqrt($x);
  }
  res.render('index', { 
    org: process.env.ORG, 
    orgFull: process.env.ORG_FULL, 
    eventName: process.env.EVENT_NAME,
    bodyText: process.env.BODY_TEXT
  });
});

router.get('/json', function(req, res, next) {
  var i = 0;
  var x = 0.0001;
  while (i < 1000000) {
    i++;
    x += Math.sqrt(x);
  }
  res.json({"name": "bad code"});
});



module.exports = router;
