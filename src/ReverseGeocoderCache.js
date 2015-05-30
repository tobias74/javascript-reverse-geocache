
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
