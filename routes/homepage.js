
/*
 * GET home page.
 */

exports.view = function(req, res){
  var data = {
    "pics": [
      {
        "name": "/images/bear.jpg"
      },
      {
        "name": "/images/midgethouse.jpg"
      },
      {
        "name": "/images/mushyhouse.jpg"
      },
      {
        "name": "/images/redchair.jpg"
      },
      {
        "name": "/images/salk.jpg"
      },
      {
        "name": "/images/sioswng.jpg"
      }
    ]
  }
  res.render('homepage', data);
};


exports.checkLogin = function(req, res) {
  var data = {
    'login': req
  }
  res.render('homepage', data);
}
