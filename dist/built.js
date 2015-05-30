
(function(context){
  var ReverseGeocoderCache = function(options){
    options = options || {};
    this.options = {};
    this.options.tileBasedCache = options.tileBasedCache || {};
    this.options.dataProvider = options.dataProvider || {};
  };
  
  ReverseGeocoderCache.prototype.sayHello = function(){
    return "hello";
  };


  ReverseGeocoderCache.prototype.get = function(lat,lng){
    if (this.options.tileBasedCache.exists(lat,lng)){
      return this.options.tileBasedCache.get(lat,lng);
    }
    else {
      $data = this.options.dataProvider.retrieveData(lat,lng);
      this.options.tileBasedCache.set(lat,lng,data);
      return data;
    }
  };
  
  
  
  context.ReverseGeocoderCache = ReverseGeocoderCache;
})(window);



;
(function(context){
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

  
  
  context.TileBasedCache = TileBasedCache;
})(window);



;
(function(context){
  var SimpleCache = function(){
    this.cache = {};
  };
  

  SimpleCache.prototype.get = function(key){
    return this.cache[key];
  };
  
  SimpleCache.prototype.set = function(key, value){
    this.cache[key] = value;
  };
  
  context.SimpleCache = SimpleCache;
})(window);



