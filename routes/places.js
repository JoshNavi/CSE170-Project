
var places = require('../places.json');

exports.view = function(req, res){
  res.render('places', places);
};
