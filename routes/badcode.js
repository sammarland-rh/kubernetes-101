var express = require('express');
var router = express.Router();

sleepTime = process.env.SLEEP_TIME || 200

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
