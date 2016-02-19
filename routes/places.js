
var places = require('../places.json');


exports.view = function(req, res){
  var data = {
    'places': places,
  };

  res.render('places', data);
};


exports.add = function(req, res){
  var data = {
    'places': places
  };
  
  res.render('places', data);
}
