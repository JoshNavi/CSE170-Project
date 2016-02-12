
var places = require('../places.json');


exports.view = function(req, res){
  var data = {
    'place': places[req.params.id]
  };

  res.render('place', thePlace);
};
