
(function(context){
  var ReverseGeocoderCache = function(options){
    options = options || {};
    this.options = {};
    this.options.cache = options.cache || {};
    this.options.dataProvider = options.dataProvider || {};
  };
  
  ReverseGeocoderCache.prototype.sayHello = function(){
    return "hello";
  };


  ReverseGeocoderCache.prototype.get = function(lat,lng){
    if (this.options.cache.exists(lat,lng)){
      return this.options.cache.get(lat,lng);
    }
    else {
      $data = this.options.dataProvider.retrieveData(lat,lng);
      this.options.cache.set(lat,lng,data);
      return data;
    }
  };
  
  
  
  context.ReverseGeocoderCache = ReverseGeocoderCache;
})(window);



