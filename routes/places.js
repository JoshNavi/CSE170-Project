
var places = require('../places.json');
var data = {
  'places': places
};

exports.view = function(req, res){
  res.render('places', data);
};


exports.add = function(req, res){
  var data = {
    "body": req.body,
    "str": JSON.Stringify(req.body)
  };

  console.log(data.str);
  res.render(test, data);
}
