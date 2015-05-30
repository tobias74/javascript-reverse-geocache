
(function(){
  ReverseGeocoderCache.DataProvider = ReverseGeocoderCache.DataProvider || {};
  
  var GoogleGeocoder = function(){
    var self = this;

    this.retrieveData = function(lat,lng,callback){
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({
        latLng: new google.maps.LatLng(lat, lng)
      }, function(results, status){
        if (status == 'OK'){
          callback({
            status: 'OK',
            content: results[0].formatted_address  
          });
        }
        else if (status == 'ZERO_RESULTS'){
          callback({
            status: 'DONT_REPEAT'
          });
        }
        else {
          console.debug('google geocoder error status: ' + status);
          callback({
            status: 'ERROR'
          });
        }
      });

    };

  };
  
  ReverseGeocoderCache.DataProvider.GoogleGeocoder = GoogleGeocoder;

})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});

