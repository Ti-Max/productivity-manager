var express = require('express');
var router = express.Router();
const con = require('../dbConnection.js');

/* GET home page. */
router.post('/submit', async function(req, res, next) {
  
  //Check request
  if(req.body.name && req.body.minutes && Number(req.body.minutes) > 0 && Number(req.body.minutes) < 8388607){
    
    // Get users information
    await getUserTotalTime(req.body.name)
    .then(result => {
      // If user exists
      if(result.length > 0){
        // Update user time
        con.query("UPDATE users SET timeLearningTotal = timeLearningTotal + "+req.body.minutes+" WHERE name ='"+req.body.name+"'", function (err, newResult, fields) {
          if (err) throw err;
          
          // Return new users time
          res.status(200).json({totalMinutes: result[0].timeLearningTotal + Number(req.body.minutes)});
        });
      }
      else{
        res.status(400).json({error: "User not found"});
      }
    }).catch(err => {
      console.log(err);
      res.status(400).json({error: "Problem with database"});
    });

  }
  else{
    res.status(400).send('Bad Request');
  }


});

// Get users total time from db
function getUserTotalTime(name){
  return new Promise((resolve, reject) => {
    con.query("SELECT timeLearningTotal FROM users WHERE name ='"+name+"'", function (err, result, fields) {
      if (err) reject(err);
      
      resolve(result);
    });
  }
  );
}
module.exports = router;
