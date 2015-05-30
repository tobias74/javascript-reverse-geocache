
(function(){
  ReverseGeocoderCache.Cache = ReverseGeocoderCache.Cache || {};
  
  var LocalStorage = function(){
    var self = this;

    this.get = function(key){
      return localStorage.getItem(key);
    };

    this.set = function(key, value){
      localStorage.setItem(key,value);
    };
    
  };
  
  
  ReverseGeocoderCache.Cache.LocalStorage = LocalStorage;

})(window.ReverseGeocoderCache = window.ReverseGeocoderCache || {});

