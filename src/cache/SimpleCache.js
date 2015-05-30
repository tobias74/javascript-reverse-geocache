
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

