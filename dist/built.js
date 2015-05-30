
(function(ReverseGeocoderCache){
  var Client = function(options){
    var self = this;
    
    options = options || {};
    this.options = {};
    this.options.tileBasedCache = options.tileBasedCache || {};
    this.options.dataProvider = options.dataProvider || {};
    
    this.sayHello = function(){
      return "hello";
    };
    
    this.get = function(lat,lng,callback){
      if (self.options.tileBasedCache.exists(lat,lng)){
        callback(self.options.tileBasedCache.get(lat,lng));
      }
      else {
        self.options.dataProvider.retrieveData(lat, lng, function(data){
          self.options.tileBasedCache.set(lat,lng,data);
          
          callback(data);      
        });
      }
    };
  
  };

  ReverseGeocoderCache.Client = Client;
  
})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});
;
(function(ReverseGeocoderCache){
  var TileBasedCache = function(options){
    this.options = {};
    this.options.cache = options.cache;
    this.options.prefix = options.prefix;
    this.options.tileSize = options.tileSize;
    
    this.EARTH_RADIUS = 6371000;

  };
  
  TileBasedCache.prototype.sayHello = function(){
    return "hello";
  };


  TileBasedCache.prototype.set = function(lat,lng,data){
    var key = this.getCacheKey(lat,lng);
    this.options.cache.set(key,data);
  };

  TileBasedCache.prototype.get = function(lat,lng){
    var key = this.getCacheKey(lat,lng);
    return this.options.cache.get(key);
  };
  
  TileBasedCache.prototype.exists = TileBasedCache.prototype.get;

  
  TileBasedCache.prototype.getCacheKey = function(lat,lng){
    
   var keySizeRadians = this.getRadiansByDistance( this.options.tileSize ); 
   var latitudeRadians = this.getRadiansByDegree(lat);
   var longitudeRadians = this.getRadiansByDegree(lng);
   var keyLatitude = Math.round(latitudeRadians / this.getLatitudeKeyLength() );
   var keyLongitude = Math.round(longitudeRadians / this.getLongitudeKeyLength(lat) );
   
   return this.options.prefix + 'key-slot-size-' + this.options.tileSize + '-lat-' + keyLatitude + '-lng-' + keyLongitude;
  };

  TileBasedCache.prototype.getRadiansKeySize = function(){
    return this.getRadiansByDistance(this.options.tileSize);
  };
  
  TileBasedCache.prototype.getRadiansByDegree = function(degree){
    return (Math.PI/180)*degree;
  };

  TileBasedCache.prototype.getRadiansByDistance = function(distance){
    return (distance / this.EARTH_RADIUS);
  };

  TileBasedCache.prototype.getLatitudeKeyLength = function(){
    return this.getRadiansKeySize();
  };

  TileBasedCache.prototype.getLongitudeKeyLength = function(lat){
    var operand = (2*Math.sin(this.getRadiansKeySize()/2)) / Math.cos(this.getRadiansByDegree(lat));
    if (operand > Math.PI/2){
      return 1;
    }
    else {
      return Math.asin(operand);
    }
  };

  ReverseGeocoderCache.TileBasedCache = TileBasedCache;
})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});


;
(function(){
  ReverseGeocoderCache.Cache = ReverseGeocoderCache.Cache || {};
  
  var SimpleCache = function(){
    this.cache = {};
  };
  

  SimpleCache.prototype.get = function(key){
    return this.cache[key];
  };
  
  SimpleCache.prototype.set = function(key, value){
    this.cache[key] = value;
  };
  
  ReverseGeocoderCache.Cache.SimpleCache = SimpleCache;

})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});

