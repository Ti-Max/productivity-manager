var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/interactive3d', function(req, res, next) {
  // Check if user is logged in
  if(req.session.user){
    res.render('interactive3d')    
  
  }else{
    res.redirect('/')
  }

});

module.exports = router;
