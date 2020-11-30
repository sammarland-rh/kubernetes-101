var express = require('express');
var router = express.Router();

sleepTime = process.env.SLEEP_TIME || 200

/* GET users listing. */
router.get('/', function(req, res, next) {
  msleep(sleepTime)
  res.render('index', { 
    org: process.env.ORG, 
    orgFull: process.env.ORG_FULL, 
    eventName: process.env.EVENT_NAME,
    bodyText: process.env.BODY_TEXT
  });
});

router.get('/json', function(req, res, next) {
  msleep(sleepTime)
  res.json({"name": "bad code"});
});

function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function sleep(n) {
  msleep(n*1000);
}

module.exports = router;
