
var profile = require('../users.json');
var data = {
  'profile': profile[0]
};

exports.view = function(req, res){
  res.render('profile', data);
};
