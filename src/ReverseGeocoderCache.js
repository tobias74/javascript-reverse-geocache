'use strict';

define(function(){
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
      var data = this.options.dataProvider.retrieveData(lat,lng);
      this.options.tileBasedCache.set(lat,lng,data);
      return data;
    }
  };

  return ReverseGeocoderCache;
});
