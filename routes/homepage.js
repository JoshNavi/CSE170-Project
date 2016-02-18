
/*
 * GET home page.
 */

exports.view = function(req, res){
  var data = {
    "pics": [
      {
        "id": 0,
        "name": "/images/bear.jpg"
      },
      {
        "id": 1,
        "name": "/images/midgethouse.jpg"
      },
      {
        "id": 2,
        "name": "/images/mushyhouse.jpg"
      },
      {
        "id": 3,
        "name": "/images/redchair.jpg"
      },
      {
        "id": 4,
        "name": "/images/salk.jpg"
      },
      {
        "id": 5,
        "name": "/images/sioswings.jpg"
      }
    ]
  }
  res.render('homepage', data);
};
