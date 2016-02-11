
var places = require('../places.json');
var pl = {
  'places':
  [
    {
      "id": 1,
      "name": "Place 1",
      "description": "This is a dope place",
      "image": "http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_cDEviqY.jpg",
      "rating": 5
    },
    {
      "id": 2,
      "name": "Place 2",
      "description": "This is a dope place",
      "image": "http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_cDEviqY.jpg",
      "rating": 5
    },
    {
      "id": 3,
      "name": "Place 3",
      "description": "This is a dope place",
      "image": "http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_cDEviqY.jpg",
      "rating": 5
    },
    {
      "id": 4,
      "name": "Place 4",
      "description": "This is a dope place",
      "image": "http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_cDEviqY.jpg",
      "rating": 5
    }
  ]

};

exports.view = function(req, res){
  console.log(places);
  console.log(pl);
  res.render('places', places);
};
