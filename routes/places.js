
var places = require('../places.json');
var data = {
  'places': places
};

exports.view = function(req, res){
  res.render('places', data);
};
