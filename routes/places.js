
var places = require('../places.json');
var pl = {
  'places': places
};

exports.view = function(req, res){
  console.log(places);
  console.log(pl);
  console.log("Anything pls");
  res.render('places', pl);
};
