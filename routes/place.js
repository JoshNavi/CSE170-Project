
/*
 * GET home page.
 */

 var thePlace = {
   'placeID': reqs.param.id
 }

exports.view = function(req, res){
  res.render('place', thePlace);
};
