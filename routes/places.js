
var places = require('../places.json');


exports.view = function(req, res){
  var data = {
    'places': places,
    "str": ""
  };

  res.render('places', data);
};


exports.add = function(req, res){
  var data = {
    "places": places,
    "str": JSON.Stringify(req.body)
  };

  res.render('places', data);
}
