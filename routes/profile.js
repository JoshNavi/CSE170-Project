var profile = require('../profile.json');

exports.view = function(req, res){
  var data = {
    "profile": profile[0]
  };
  res.render('profile', data);
};
