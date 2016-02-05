
/*
 * GET home page.
 */

exports.view = function(req, res){
  var thePlace = {
    'placeID': req.params.id
  }
  res.render('place', thePlace);
};
