var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/genres', function(req, res, next) {
   return res.send(["Fiction", "Horror", "Languages", "Travel"]);
});

module.exports = router;