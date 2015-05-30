
(function(ReverseGeocoderCache){
  var Client = function(options){
    options = options || {};
    this.options = {};
    this.options.tileBasedCache = options.tileBasedCache || {};
    this.options.dataProvider = options.dataProvider || {};
  };
  
  Client.prototype.sayHello = function(){
    return "hello";
  };


  Client.prototype.get = function(lat,lng){
    if (this.options.tileBasedCache.exists(lat,lng)){
      return this.options.tileBasedCache.get(lat,lng);
    }
    else {
      data = this.options.dataProvider.retrieveData(lat,lng);
      this.options.tileBasedCache.set(lat,lng,data);
      return data;
    }
  };

  ReverseGeocoderCache.Client = Client;
  
})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});
