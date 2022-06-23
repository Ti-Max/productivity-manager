var express = require('express');
var router = express.Router();
const con = require('../dbConnection.js');
const session = require('express-session');

/* GET home page. */
router.get('/o', function(req, res, next) {


  console.log("From others.js: "  + req.session.user);
  if(req.session.user){
    res.send('hELO' + req.session.user);
  }
  

});

module.exports = router;
