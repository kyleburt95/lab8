function initMap() {
	// add your code here
  var ucsd_ltlng = {lat:32.8791262, lng: -117.2392982};
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });
  
  var marker = new google.maps.marker({
    position: ucsd_ltlng,
    map: map,
    title: "UCSD"
  });
}