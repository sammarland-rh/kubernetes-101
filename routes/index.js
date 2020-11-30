var express = require('express');
var router = express.Router();
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    org: process.env.ORG, 
    orgFull: process.env.ORG_FULL, 
    eventName: process.env.EVENT_NAME,
    bodyText: process.env.BODY_TEXT
  });
});

module.exports = router;