var express = require('express');
var router = express.Router();
const con = require('../dbConnection.js');
const session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Check if user is logged in
  if(req.session.user){
    // get user info from db
    let users = [];
    con.query('SELECT timeLearningTotal FROM users WHERE name = "'+req.session.user+'"', function (err, result, fields) {
      if (err) throw err;
      
      // get information about other users
      con.query('SELECT name, timeLearningTotal FROM users ORDER BY timeLearningTotal DESC', function (err, result2, fields) {
        if (err) throw err;
        
        result2.forEach(element => {
          users.push({name: element.name, time: element.timeLearningTotal});
        });
        console.log(users);
        res.render('index', { name: req.session.user, time: result[0].timeLearningTotal, users:users });
      });
    });
  }else{
    res.render('login');
  }

});

module.exports = router;
