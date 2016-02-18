
var profiles = require('../users.json');


exports.view = function(req, res){
  var data = {
    'profile': profiles[0]
  };
  
  res.render('profile', data);
};
