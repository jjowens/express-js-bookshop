var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/genres', function(req, res, next) {
   res.type('json');
   res.status(200);
   res.header("application/json");
   return res.json(["Fiction", "Horror", "Languages", "Travel"]);
});

module.exports = router;