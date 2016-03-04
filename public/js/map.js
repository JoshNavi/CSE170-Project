var pls = require('../places.json');

function initMap() {
  var myLatLng = {lat:32.878094, lng:-117.237586};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng,
    disableDefaultUI: true
  });

  var places = [];

  for( var i = 0; i < pls.length; i++) {
    var place = {
      "name": pls[i].name,
      "link": pls[i].id,
      "lat": pls[i].loc.lat,
      "lng": pls[i].loc.lng
    }

    places.append(place);
  }

  // var places = [
  //   {
  //     "name" : "Boulder Bear",
  //     "lat": 32.881971,
  //     "lng": -117.234152,
  //     "link": 0
  //   },
  //   {
  //     "name" : "Mushroom House",
  //     "lat": 32.887690,
  //     "lng": -117.252916,
  //     "link": 1
  //   },
  //   {
  //     "name" : "Red Chair",
  //     "lat": 32.873217,
  //     "lng": -117.241254,
  //     "link": 2
  //   },
  //   {
  //     "name" : "Salk Institute",
  //     "lat": 32.887411,
  //     "lng": -117.245331,
  //     "link": 3
  //   },
  //   {
  //     "name" : "Munchkin House",
  //     "lat": 32.844426,
  //     "lng": -117.256618,
  //     "link": 5
  //   }
  // ];

  for( var i = 0; i < places.length; i++) {
    var pos = {
      lat: places[i].lat,
      lng: places[i].lng
    };

    var marker = new google.maps.Marker({
      map: map,
      position: pos,
      title: places[i].name,
      optimized: false,
      url: "http://projectgooutside.herokuapp.com/places/" + places[i].link
    });

    google.maps.event.addListener(marker, 'mousedown', function() {
        window.location.href = this.url;
    });
  }

}
