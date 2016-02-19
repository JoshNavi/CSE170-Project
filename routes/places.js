
var places = require('../places.json');


exports.view = function(req, res){
  var data = {
    'places': places,
  };

  res.render('places', data);
};


exports.add = function(req, res){
  // var data = {
  //   'places': places
  // };
  var id = places.length;
  var newPlace = {
    "id": id,
    "name": req.body.name,
    "description": req.body.description,
    "image" : req.body.image,
    "ratings" : {
      "overall": req.body.overall,
      "secluded": req.body.secluded,
      "romantic": req.body.romantic,
      "quiet": req.body.quiet
    }
  };
  places.push(newPlace)
  var data = {
    "places": places
  };

  res.render('places', data);
}
