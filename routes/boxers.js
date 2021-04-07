var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let boxerData = fs.readFileSync('./boxers.json');
  var siteBoxers = JSON.parse(boxerData);

  //Assigning the parsed array of objects read-in from boxers.json to a variable called createdBoxers
  var createdBoxers = siteBoxers;
  res.render('boxer', {createdBoxers});
});

module.exports = router;
