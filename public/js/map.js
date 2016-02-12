function initMap() {
  var myLatLng = {lat:32.878094, lng:-117.237586};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
