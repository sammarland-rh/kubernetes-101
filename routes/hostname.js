var express = require('express');
var router = express.Router();
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({hostname: process.env.HOSTNAME || "No Name Set"});
});

module.exports = router;