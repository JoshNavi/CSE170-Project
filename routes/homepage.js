
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('homepage');
};


exports.checkLogin = function(req, res) {
  var data = {
    'login': req
  }
  res.render('homepage', data);
}
