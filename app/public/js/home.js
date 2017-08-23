//captures users location
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var lat = pos.lat;
      var long = pos.lng;
      var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=AIzaSyB5VITF3SUhkXL8Vc7qFLPJcXdbAgVF_OI";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response){
        zips = response.results[0].address_components[7].long_name; 
      });
    });
  };
};
initMap();