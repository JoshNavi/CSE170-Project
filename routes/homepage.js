
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
        "name": "/images/sioswings.jpg"
      }
    ]
  }
  res.render('homepage', data);
};
