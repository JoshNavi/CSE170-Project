
var places = require('../places.json');

exports.view = function(req, res){
  console.log(places);
  res.render('places', places);
};
