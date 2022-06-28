var express = require('express');
var router = express.Router();
const con = require('../dbConnection.js');

/* GET home page. */
router.post('/login', async function(req, res, next) {
  // Check input data
  if(!req.body.username || !req.body.password){
    res.status(401).json({error: 'Missing username or password'});
  }
  else {
    // Check if user exists
    const rows = await getUserInfo(req.body.username);

    if(rows.length === 0){
      res.status(401).json({error: 'User does not exist'});
    }
    else {
      // Check if password is correct
      if(rows[0].password !== req.body.password){
        res.status(401).json({error: 'Wrong password'});
      }
      else {

        req.session.user = req.body.username;
        // User is logged in
        res.status(200).json({});
      }
    }
  }
});

//logout
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

//signup
router.post('/signup', async function(req, res, next) {
  // Check input data
  if(!req.body.username || !req.body.password || !req.body.email){
    res.status(401).json({error: 'Missing username or password or email'});
  }
  else {
    // Check if user exists
    const rows = await getUserInfo(req.body.username);
    if(rows.length > 0){
      res.status(401).json({error: 'User already exists'});
    }
    else {
      // Create user
      await createUser(req.body.username, req.body.email, req.body.password);
      res.status(200).json({});
    }
  }
});

// Creates a new user
function createUser(name, email, password)
{
  return new Promise(function(resolve, reject){
    con.query('INSERT INTO users (name, email, password, timeLearningTotal) VALUES ("'+name+'", "'+email+'", "'+password+'", 0)', function (err, result, fields) {
      if (err) throw err;
      resolve();
    });
  });
}
// Get users info from db
function getUserInfo(name)
{
  return new Promise(function(resolve, reject){
    con.query('SELECT name, password FROM users WHERE name = ?', [name], function (err, result, fields) {
      if (err) throw err;
      resolve(result);
    });
  });
}
module.exports = router;
