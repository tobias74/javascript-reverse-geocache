// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'src',
    paths: {
        app: './src'
    }
});


requirejs(["ReverseGeocoderCache", "TileBasedCache", "caches/SimpleCache"], function(ReverseGeocoderCache, TileBasedCache, SimpleCache){
  var simpleCache = new SimpleCache();
  
  var tileBasedCache = new TileBasedCache({
    tileSize:1000,
    prefix:'Testing_Reverse_Geocoder_',
    cache: simpleCache 
  });
  
  var reverseGeocoderCache = new ReverseGeocoderCache({
    tileBasedCache: tileBasedCache,
    dataProvider: {
      retrieveData: function(lat,lng){
        return 'dummy-data for ' + lat + ' and ' + lng;
      }
    }
  });
  
  alert(reverseGeocoderCache.get(10, 10));
  alert(reverseGeocoderCache.get(10.0001, 9.9999));
  alert(reverseGeocoderCache.get(20, 20));
});

